import { StyleSheet, Platform } from 'react-native';
import color_default from '../shared/const';

export default StyleSheet.create({
    droidSafeArea: {
        flex: 1,
        backgroundColor: color_default.THEME_COLOR,
        paddingTop: Platform.OS === 'android' ? 5: 0
    },
});