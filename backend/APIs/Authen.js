require('dotenv').config();

const express = require('express');
const authenRoute = express.Router();
const bcrypt = require('bcrypt');
const AccountSchema = require('../Models/AccountSchema');
const { generateAccessToken, authenticateToken } = require('../Middleware/token');

/* verify password */
const verifyPassword = async (acc, password) => {
    const validPassword = await bcrypt.compare(password, acc.password);
    return validPassword;
}

const loginAccount = async (acc, password) => {
    if (!verifyPassword(acc, password)) return res.status(400).json({ code: "40", message: "wrong password" });
    else {
        const user = { id: acc._id };
        const accessToken = await generateAccessToken(user);

        const updateLogin = await AccountSchema.update({ _id: acc._id }, { accessToken: accessToken });
        return res.status(200).json({ code: "20", message: "OK", data: {
                id: acc._id,
                userName: acc.userName,
                accessToken: accessToken
        }});
    }
}

/* api login */
authenRoute.post('/accounts/login', async (req, res) => {
    const { phoneNumber, email, password } = req.body.account;

      try {
        if (phoneNumber && !email) {
            const acc = await AccountSchema.findOne({ phoneNumber: phoneNumber});
            loginAccount(acc, password);
        } else if (!phoneNumber && email) {
            const acc = await AccountSchema.findOne({ email: email});
            loginAccount(acc, password);
        } else {
            const acc = await AccountSchema.findOne({ phoneNumber: phoneNumber, email: email});
            loginAccount(acc, password);
        }
    } catch (err) {
        return res.status(500).json({ code: "50", message: "error database" });
    }
});

/* api register */
authenRoute.post('/accounts/register', async (req, res) => {
    const { cccd, phoneNumber, email, password } = req.body;

    try {
        const existAcc = await AccountSchema.findOne({ $or: [{ cccd: cccd }, { phoneNumber: phoneNumber }, { email: email }] });
        if (existAcc) {
            return res.status(403).json({ code: "43", message: "account existed" });
        } else {
            const encodePassword = await bcrypt.hash(password, 10);
            await AccountSchema.insertOne({ cccd: cccd, phoneNumber: phoneNumber, email: email, password: encodePassword });
            
            return res.status(200).json({ code: "20", message: "OK" });

        }
    } catch (err) {
        return res.status(500).json({ code: "50", message: "error database" });
    }
});

/* api logout */
authenRoute.post('/accounts/logout', authenticateToken, async (req, res) => {
    const { token } = req.body;

    try {
        await AccountSchema.update({ _id: req.currentUser.id });
        return res.status(200).json({ code: "20", message: "OK" });
    } catch (err) {
        return res.status(500).json({ code: "50", message: "error database" });
    }
});

module.exports = authenRoute;