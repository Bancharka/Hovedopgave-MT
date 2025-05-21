import { useTheme } from "../../ThemeContext";
import "./Blurryblop.scss";

export default function Blurryblop({ style = {} }) {
    const { darkMode } = useTheme();

    if (!darkMode) return null;

    return (
        
            <img
                className="blurryblop"
                src="img/blurryblop.svg"
                alt="Blurry decorative blob"
                style={style}
            />
        
    );
}
