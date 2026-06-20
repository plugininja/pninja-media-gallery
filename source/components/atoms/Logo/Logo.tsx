import { CSS_VAR } from "~/types/tokens";

/**
 * Pninja Media Gallery — topbar logo.
 * Shows an icon + wordmark at a size that fits comfortably in the header.
 */
const Logo = () => (
    <div
        className="pnpnd-logo"
        style={ {
            display:    'flex',
            alignItems: 'center',
            gap:        10,
            userSelect: 'none',
        } }
    >
        { /* Icon mark */ }
        <svg
            width={ 32 }
            height={ 32 }
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <rect width={ 32 } height={ 32 } rx={ 8 } fill={ `var(${ CSS_VAR.PRIMARY })` } />
            { /* 2×2 image grid tiles */ }
            <rect x={ 4 }  y={ 4 }  width={ 11 } height={ 11 } rx={ 2.5 } fill="white" />
            <rect x={ 17 } y={ 4 }  width={ 11 } height={ 11 } rx={ 2.5 } fill="white" fillOpacity={ 0.75 } />
            <rect x={ 4 }  y={ 17 } width={ 11 } height={ 11 } rx={ 2.5 } fill="white" fillOpacity={ 0.75 } />
            <rect x={ 17 } y={ 17 } width={ 11 } height={ 11 } rx={ 2.5 } fill="white" fillOpacity={ 0.5 } />
            { /* Magnify circle on top-left tile */ }
            <circle cx={ 9.5 } cy={ 9.5 } r={ 3.5 } fill="none" stroke={ `var(${ CSS_VAR.PRIMARY })` } strokeWidth={ 1.5 } />
            <line x1={ 12 } y1={ 12 } x2={ 14 } y2={ 14 } stroke={ `var(${ CSS_VAR.PRIMARY })` } strokeWidth={ 1.5 } strokeLinecap="round" />
        </svg>

        { /* Wordmark */ }
        <span style={ {
            display:    'flex',
            flexDirection: 'column',
            lineHeight:  1.15,
        } }>
            <span style={ {
                fontWeight: 700,
                fontSize:   15,
                color:      `var(${ CSS_VAR.BLACK })`,
                letterSpacing: '-0.02em',
            } }>
                Pninja Media Gallery
            </span>
            <span style={ {
                fontSize:  10,
                fontWeight: 500,
                color:      `var(${ CSS_VAR.GRAY_400 })`,
                letterSpacing: '0.02em',
            } }>
                By Pninja
            </span>
        </span>
    </div>
);

export default Logo;
