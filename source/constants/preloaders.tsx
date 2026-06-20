import { __ } from "@wordpress/i18n";

export const PRELOADERS: {
    id: number;
    title: string;
    isPro?: boolean;
    icon: React.ReactElement<any, any>;
}[] = [
    {
        id: 1,
        title: __("Default", "pninja-media-gallery"),
        isPro: false,
        icon: (
            <svg
                className="lds-balls"
                width="80px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle cx="67.8023" cy="59.9068" r={6} fill="#51CACC">
                    <animate
                        attributeName="cx"
                        values="75;57.72542485937369"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cy"
                        values="50;73.77641290737884"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="fill"
                        values="#51CACC;#9DF871"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="46.0792" cy="69.9923" r={6} fill="#9DF871">
                    <animate
                        attributeName="cx"
                        values="57.72542485937369;29.774575140626318"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cy"
                        values="73.77641290737884;64.69463130731182"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="fill"
                        values="#9DF871;#E0FF77"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="29.7746" cy="52.4491" r={6} fill="#E0FF77">
                    <animate
                        attributeName="cx"
                        values="29.774575140626318;29.774575140626315"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cy"
                        values="64.69463130731182;35.30536869268818"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="fill"
                        values="#E0FF77;#DE9DD6"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="41.4208" cy="31.5213" r={6} fill="#DE9DD6">
                    <animate
                        attributeName="cx"
                        values="29.774575140626315;57.72542485937368"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cy"
                        values="35.30536869268818;26.22358709262116"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="fill"
                        values="#DE9DD6;#FF708E"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="64.9232" cy="36.1304" r={6} fill="#FF708E">
                    <animate
                        attributeName="cx"
                        values="57.72542485937368;75"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="cy"
                        values="26.22358709262116;49.99999999999999"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                    <animate
                        attributeName="fill"
                        values="#FF708E;#51CACC"
                        dur="1s"
                        repeatCount="indefinite"
                    />
                </circle>
            </svg>
        ),
    },

    {
        id: 2,
        title: __("Balls", "pninja-media-gallery"),
        isPro: false,
        icon: (
            <svg
                width="120"
                height="120"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle cx="75" cy="50" fill="#ffd7c0" r="3">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.9166666666666666s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.9166666666666666s"
                    />
                </circle>
                <circle cx="71.651" cy="62.5" fill="#ffd7c0" r="3.533">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.8333333333333334s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.8333333333333334s"
                    />
                </circle>
                <circle cx="62.5" cy="71.651" fill="#ffd7c0" r="4.2">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.75s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.75s"
                    />
                </circle>
                <circle cx="50" cy="75" fill="#ffd7c0" r="4.866">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.6666666666666666s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.6666666666666666s"
                    />
                </circle>
                <circle cx="37.5" cy="71.651" fill="#ffd7c0" r="4.467">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.5833333333333334s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.5833333333333334s"
                    />
                </circle>
                <circle cx="28.349" cy="62.5" fill="#ffd7c0" r="3.8">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.5s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.5s"
                    />
                </circle>
                <circle cx="25" cy="50" fill="#ffd7c0" r="3.134">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.4166666666666667s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.4166666666666667s"
                    />
                </circle>
                <circle cx="28.349" cy="37.5" fill="#ffd7c0" r="3">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.3333333333333333s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.3333333333333333s"
                    />
                </circle>
                <circle cx="37.5" cy="28.349" fill="#ffd7c0" r="3">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.25s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.25s"
                    />
                </circle>
                <circle cx="50" cy="25" fill="#ffd7c0" r="3">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.16666666666666666s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.16666666666666666s"
                    />
                </circle>
                <circle cx="62.5" cy="28.349" fill="#ffd7c0" r="3">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="-0.08333333333333333s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="-0.08333333333333333s"
                    />
                </circle>
                <circle cx="71.651" cy="37.5" fill="#ffd7c0" r="3">
                    <animate
                        attributeName="r"
                        values="3;3;5;3;3"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0s"
                    />
                    <animate
                        attributeName="fill"
                        values="#ffd7c0;#ffd7c0;#ff1574;#ffd7c0;#ffd7c0"
                        repeatCount="indefinite"
                        dur="1s"
                        begin="0s"
                    />
                </circle>
            </svg>
        ),
    },
    /* <fs_premium_only> */
    {
        id: 3,
        title: __("DNA", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: "auto",
                    background: "none",
                    display: "block",
                    shapeRendering: "auto",
                }}
                width="120"
                height="120"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <circle
                    cx="6.451612903225806"
                    cy="60.6229"
                    r="3.41988"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.5s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="0s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.5s"
                    />
                </circle>
                <circle
                    cx="6.451612903225806"
                    cy="39.3771"
                    r="2.58012"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.5s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.5s"
                    />
                </circle>
                <circle
                    cx="16.129032258064512"
                    cy="68.1552"
                    r="3.17988"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.7s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.2s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.7s"
                    />
                </circle>
                <circle
                    cx="16.129032258064512"
                    cy="31.8448"
                    r="2.82012"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.7s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.2s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.7s"
                    />
                </circle>
                <circle
                    cx="25.806451612903224"
                    cy="69.3634"
                    r="2.93988"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.9s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.4s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.9s"
                    />
                </circle>
                <circle
                    cx="25.806451612903224"
                    cy="30.6366"
                    r="3.06012"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.9s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.4s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.9s"
                    />
                </circle>
                <circle
                    cx="35.48387096774193"
                    cy="65.3666"
                    r="2.69988"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.1s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.6s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.1s"
                    />
                </circle>
                <circle
                    cx="35.48387096774193"
                    cy="34.6334"
                    r="3.30012"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.1s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.6s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.1s"
                    />
                </circle>
                <circle
                    cx="45.16129032258064"
                    cy="53.8474"
                    r="2.45988"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.3s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-0.8s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.3s"
                    />
                </circle>
                <circle
                    cx="45.16129032258064"
                    cy="46.1526"
                    r="3.54012"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.3s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.8s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.3s"
                    />
                </circle>
                <circle
                    cx="54.838709677419345"
                    cy="39.3771"
                    r="2.58012"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.5s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.5s"
                    />
                </circle>
                <circle
                    cx="54.838709677419345"
                    cy="60.6229"
                    r="3.41988"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.5s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.5s"
                    />
                </circle>
                <circle
                    cx="64.51612903225805"
                    cy="31.8448"
                    r="2.82012"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.7s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.2s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.7s"
                    />
                </circle>
                <circle
                    cx="64.51612903225805"
                    cy="68.1552"
                    r="3.17988"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.7s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.2s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.7s"
                    />
                </circle>
                <circle
                    cx="74.19354838709677"
                    cy="30.6366"
                    r="3.06012"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.9s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.4s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.9s"
                    />
                </circle>
                <circle
                    cx="74.19354838709677"
                    cy="69.3634"
                    r="2.93988"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.9s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.4s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.9s"
                    />
                </circle>
                <circle
                    cx="83.87096774193547"
                    cy="34.6334"
                    r="3.30012"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.1s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.6s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.1s"
                    />
                </circle>
                <circle
                    cx="83.87096774193547"
                    cy="65.3666"
                    r="2.69988"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-3.1s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.6s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.1s"
                    />
                </circle>
                <circle
                    cx="93.54838709677418"
                    cy="46.1526"
                    r="3.54012"
                    fill="rgba(233, 12, 89, 0.5125806451612902)"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.3s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-1.8s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="rgba(233, 12, 89, 0.5125806451612902);#ff0033;rgba(233, 12, 89, 0.5125806451612902)"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.3s"
                    />
                </circle>
                <circle
                    cx="93.54838709677418"
                    cy="53.8474"
                    r="2.45988"
                    fill="#46dff0"
                >
                    <animate
                        attributeName="r"
                        values="2.4000000000000004;3.5999999999999996;2.4000000000000004"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-3.3s"
                    />
                    <animate
                        attributeName="cy"
                        values="30.5;69.5;30.5"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.8s"
                        keySplines="0.5 0 0.5 1;0.5 0 0.5 1"
                        calcMode="spline"
                    />
                    <animate
                        attributeName="fill"
                        values="#46dff0;rgba(53, 58, 57, 0.1435483870967742);#46dff0"
                        dur="2s"
                        repeatCount="indefinite"
                        begin="-2.3s"
                    />
                </circle>
            </svg>
        ),
    },
    /* </fs_premium_only> */
    /* <fs_premium_only> */
    {
        id: 4,
        title: __("Cube", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="120"
                height="120"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-cube"
            >
                <g transform="translate(25,25)">
                    <rect
                        x={-18}
                        y={-18}
                        width={36}
                        height={36}
                        fill="#ffffcb"
                        transform="scale(1.11648 1.11648)"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            calcMode="spline"
                            values="1.5;1"
                            dur="1s"
                            keySplines="0 0.5 0.5 1"
                            begin="-0.3s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="translate(75,25)">
                    <rect
                        x={-18}
                        y={-18}
                        width={36}
                        height={36}
                        fill="#fac090"
                        transform="scale(1.1619 1.1619)"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            calcMode="spline"
                            values="1.5;1"
                            dur="1s"
                            keySplines="0 0.5 0.5 1"
                            begin="-0.2s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="translate(25,75)">
                    <rect
                        x={-18}
                        y={-18}
                        width={36}
                        height={36}
                        fill="#ff7c81"
                        transform="scale(1.30165 1.30165)"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            calcMode="spline"
                            values="1.5;1"
                            //keyTimes="0;1"
                            dur="1s"
                            keySplines="0 0.5 0.5 1"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="translate(75,75)">
                    <rect
                        x={-18}
                        y={-18}
                        width={36}
                        height={36}
                        fill="#c0f6d2"
                        transform="scale(1.21853 1.21853)"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="scale"
                            calcMode="spline"
                            values="1.5;1"
                            //keyTimes="0;1"
                            dur="1s"
                            keySplines="0 0.5 0.5 1"
                            begin="-0.1s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
            </svg>
        ),
    },
    /* </fs_premium_only> */
    /* <fs_premium_only> */
    {
        id: 5,
        title: __("Clock", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="120"
                height="120"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-lds-clock"
            >
                <g transform="translate(50 50)">
                    <g transform="scale(0.7)">
                        <g transform="translate(-50 -50)">
                            <path
                                d="M50,14c19.85,0,36,16.15,36,36S69.85,86,50,86S14,69.85,14,50S30.15,14,50,14 M50,10c-22.091,0-40,17.909-40,40 s17.909,40,40,40s40-17.909,40-40S72.091,10,50,10L50,10z"
                                fill="#f5076a"
                                stroke="#f5076a"
                                strokeWidth={3}
                            />
                            <path
                                d="M52.78,42.506c-0.247-0.092-0.415-0.329-0.428-0.603L52.269,40l-0.931-21.225C51.304,18.06,50.716,17.5,50,17.5 s-1.303,0.56-1.338,1.277L47.731,40l-0.083,1.901c-0.013,0.276-0.181,0.513-0.428,0.604c-0.075,0.028-0.146,0.063-0.22,0.093V44h6 v-1.392C52.925,42.577,52.857,42.535,52.78,42.506z"
                                fill="#00a1d5"
                                transform="rotate(264 50 50)"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 50 50;360 50 50"
                                    dur="0.625s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </path>
                            <path
                                d="M58.001,48.362c-0.634-3.244-3.251-5.812-6.514-6.391c-3.846-0.681-7.565,1.35-9.034,4.941 c-0.176,0.432-0.564,0.717-1.013,0.744l-15.149,0.97c-0.72,0.043-1.285,0.642-1.285,1.383c0,0.722,0.564,1.321,1.283,1.363 l15.153,0.971c0.447,0.027,0.834,0.312,1.011,0.744c1.261,3.081,4.223,5.073,7.547,5.073c2.447,0,4.744-1.084,6.301-2.975 C57.858,53.296,58.478,50.808,58.001,48.362z M50,53.06c-1.688,0-3.06-1.373-3.06-3.06s1.373-3.06,3.06-3.06s3.06,1.373,3.06,3.06 S51.688,53.06,50,53.06z"
                                fill="#00a1d5"
                                transform="rotate(156 50 50)"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 50 50;360 50 50"
                                    dur="2.5s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                    </g>
                </g>
            </svg>
        ),
    },
    /* <fs_premium_only> */
    {
        id: 6,
        title: __("Bean Eater", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="120"
                height="120"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-pacman"
            >
                <g style={{ display: "block" }}>
                    <circle cx="66.05" cy={50} r={4} fill="#abbd81">
                        <animate
                            attributeName="cx"
                            calcMode="linear"
                            values="95;35"
                            dur="0.8"
                            begin="-0.536s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            calcMode="linear"
                            values="0;1;1"
                            dur="0.8"
                            begin="-0.536s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="86.45" cy={50} r={4} fill="#abbd81">
                        <animate
                            attributeName="cx"
                            calcMode="linear"
                            values="95;35"
                            dur="0.8"
                            begin="-0.264s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            calcMode="linear"
                            values="0;1;1"
                            dur="0.8"
                            begin="-0.264s"
                            repeatCount="indefinite"
                        />
                    </circle>
                    <circle cx="46.25" cy={50} r={4} fill="#abbd81">
                        <animate
                            attributeName="cx"
                            calcMode="linear"
                            values="95;35"
                            dur="0.8"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                        <animate
                            attributeName="fill-opacity"
                            calcMode="linear"
                            values="0;1;1"
                            dur="0.8"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </circle>
                </g>
                <g transform="translate(-15 0)">
                    <path
                        d="M50 50L20 50A30 30 0 0 0 80 50Z"
                        fill="#f8b26a"
                        transform="rotate(16.875 50 50)"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            calcMode="linear"
                            values="0 50 50;45 50 50;0 50 50"
                            dur="0.8s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path
                        d="M50 50L20 50A30 30 0 0 1 80 50Z"
                        fill="#f8b26a"
                        transform="rotate(-16.875 50 50)"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="rotate"
                            calcMode="linear"
                            values="0 50 50;-45 50 50;0 50 50"
                            dur="0.8s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </svg>
        ),
    },
    /* </fs_premium_only> */
    /* <fs_premium_only> */
    {
        id: 7,
        title: __("Coffee", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="80px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-coffee"
                style={{ background: "none" }}
            >
                <defs>
                    <linearGradient
                        id="gradient"
                        x1="0%"
                        x2="0%"
                        y1="0%"
                        y2="100%"
                    >
                        <stop offset="10%" stopColor="black" stopOpacity={0} />
                        <stop offset="100%" stopColor="white" stopOpacity={1} />
                    </linearGradient>
                    <mask
                        id="mask"
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={100}
                        height={100}
                    >
                        <rect
                            x={22}
                            y={8}
                            width={56}
                            height={54}
                            fill="url(#gradient)"
                        />
                    </mask>
                    <path
                        id="steam"
                        d="M0-4c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0 c2.1,2.6,2.1,6.4,0,9l0,0c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9c-2.1,2.6-2.1,6.4,0,9l0,0c2.1,2.6,2.1,6.4,0,9l0,0 c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9h0c-2.1,2.6-2.1,6.4,0,9h0c2.1,2.6,2.1,6.4,0,9"
                        strokeWidth={6}
                        strokeLinecap="round"
                        fill="#f00"
                        stroke="#ff7c81"
                    />
                </defs>
                <g mask="url(#mask)">
                    <use x={29} y="-9.5" href="#steam">
                        <animate
                            attributeName="y"
                            calcMode="linear"
                            values="4;-14"
                            dur={1}
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </use>
                    <use x={47} y={-9} href="#steam">
                        <animate
                            attributeName="y"
                            calcMode="linear"
                            values="0;-18"
                            dur="0.5"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </use>
                    <use x={64} y="-6.25" href="#steam">
                        <animate
                            attributeName="y"
                            calcMode="linear"
                            values="-4;-22"
                            dur="0.6666666666666666"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </use>
                </g>
                <path
                    d="M81.2,52.5l-5.2,0V49c0-1.6-1.3-3-3-3H20c-1.6,0-3,1.3-3,3v11.6C17,71.3,25.7,80,36.5,80h20.1 c7.1,0,13.3-3.8,16.7-9.5h8.3c5.2,0,9.3-4.4,9-9.6C90.2,56.1,86,52.5,81.2,52.5z M81.5,67.5h-6.8c0.8-2.2,1.3-4.5,1.3-7v-5h5.5 c3.3,0,6,2.7,6,6S84.8,67.5,81.5,67.5z"
                    fill="#fac090"
                />
                <path
                    d="M78.8,88H19.2c-1.1,0-2-0.9-2-2s0.9-2,2-2h59.5c1.1,0,2,0.9,2,2S79.9,88,78.8,88z"
                    fill="#dae4bf"
                />
            </svg>
        ),
    },
    {
        id: 8,
        title: __("Atom", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    margin: "auto",
                    background: "none",
                    display: "block",
                    shapeRendering: "auto",
                }}
                width="80px"
                height="80px"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <defs>
                    <path
                        id="path"
                        d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15"
                        fill="none"
                    />
                    <path
                        id="patha"
                        d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0"
                        fill="none"
                    />
                </defs>
                <g transform="rotate(0 50 50)">
                    <use xlinkHref="#path" stroke="#dfdfdf" strokeWidth={3} />
                </g>
                <g transform="rotate(60 50 50)">
                    <use xlinkHref="#path" stroke="#dfdfdf" strokeWidth={3} />
                </g>
                <g transform="rotate(120 50 50)">
                    <use xlinkHref="#path" stroke="#dfdfdf" strokeWidth={3} />
                </g>
                <g transform="rotate(0 50 50)">
                    <circle cx={50} cy={15} r={9} fill="#e15b64">
                        <animateMotion
                            dur="1s"
                            repeatCount="indefinite"
                            begin="0s"
                        >
                            <mpath xlinkHref="#patha" />
                        </animateMotion>
                    </circle>
                </g>
                <g transform="rotate(60 50 50)">
                    <circle cx={50} cy={15} r={9} fill="#f8b26a">
                        <animateMotion
                            dur="1s"
                            repeatCount="indefinite"
                            begin="-0.16666666666666666s"
                        >
                            <mpath xlinkHref="#patha" />
                        </animateMotion>
                    </circle>
                </g>
                <g transform="rotate(120 50 50)">
                    <circle cx={50} cy={15} r={9} fill="#abbd81">
                        <animateMotion
                            dur="1s"
                            repeatCount="indefinite"
                            begin="-0.3333333333333333s"
                        >
                            <mpath xlinkHref="#patha" />
                        </animateMotion>
                    </circle>
                </g>
            </svg>
        ),
    },
    {
        id: 9,
        title: __("Blocks", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                className="lds-blocks"
                width="80px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <rect x={17} y={17} width={20} height={20} fill="#577c9b">
                    <animate
                        attributeName="fill"
                        values="#0dceff;#577c9b;#577c9b"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0s"
                        calcMode="discrete"
                    />
                </rect>
                <rect x={40} y={17} width={20} height={20} fill="#577c9b">
                    <animate
                        attributeName="fill"
                        values="#0dceff;#577c9b;#577c9b"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.125s"
                        calcMode="discrete"
                    />
                </rect>
                <rect x={63} y={17} width={20} height={20} fill="#577c9b">
                    <animate
                        attributeName="fill"
                        values="#0dceff;#577c9b;#577c9b"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.25s"
                        calcMode="discrete"
                    />
                </rect>
                <rect x={17} y={40} width={20} height={20} fill="#577c9b">
                    <animate
                        attributeName="fill"
                        values="#0dceff;#577c9b;#577c9b"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.875s"
                        calcMode="discrete"
                    />
                </rect>
                <rect x={63} y={40} width={20} height={20} fill="#577c9b">
                    <animate
                        attributeName="fill"
                        values="#0dceff;#577c9b;#577c9b"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.375s"
                        calcMode="discrete"
                    />
                </rect>
                <rect x={17} y={63} width={20} height={20} fill="#577c9b">
                    <animate
                        attributeName="fill"
                        values="#0dceff;#577c9b;#577c9b"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.75s"
                        calcMode="discrete"
                    />
                </rect>
                <rect x={40} y={63} width={20} height={20} fill="#577c9b">
                    <animate
                        attributeName="fill"
                        values="#0dceff;#577c9b;#577c9b"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.625s"
                        calcMode="discrete"
                    />
                </rect>
                <rect x={63} y={63} width={20} height={20} fill="#577c9b">
                    <animate
                        attributeName="fill"
                        values="#0dceff;#577c9b;#577c9b"
                        dur="1s"
                        repeatCount="indefinite"
                        begin="0.5s"
                        calcMode="discrete"
                    />
                </rect>
            </svg>
        ),
    },
    {
        id: 10,
        title: __("Earth", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="79px"
                height="79px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-earth"
            >
                <defs>
                    <clipPath id="cut-off">
                        <circle cx={50} cy={50} r={35} />
                    </clipPath>
                </defs>
                <circle cx={50} cy={50} r={35} fill="#ff7c81" />
                <g clipPath="url(#cut-off)">
                    <path
                        transform="translate(-62.5 0)"
                        fill="#ffffcb"
                        d="M64.4,74.4c0.3,0.3,0.2,0.3-0.3,0.3C64.1,74.3,64.2,74.5,64.4,74.4z M31.4,75.4c-0.2,0.1-0.3-0.2-0.5,0.1c0.3,0.2,0.6,0.1,0.8-0.1C31.6,75.2,31.6,75.4,31.4,75.4z M84.9,36.9c-0.3,0.2-0.8-0.1-1.1-0.5 c0.1,0.2,0.1,0.6,0.3,0.9c-0.5,0.2-0.2,0.6,0.2,0.7c0-0.1,0-0.3,0-0.4c0.2,0.1,0.4,0.2,0.5,0.3c0.2-0.2,0.2-0.3,0.4-0.5 C85.1,37.2,85,37,84.9,36.9z M85.1,40.6c0-0.6-0.1-2.1-0.6-2.4c-0.6-0.4,0.5,2.1-0.6,1.6c0,0.2-0.1,0.5,0,0.7 c-0.8-0.3-0.9,0.5-1.4,0.9c0.3,0.3,0.4,0.6,0.6,0.9c0.3-0.4,0.2-0.9-0.3-1.2c0.2,0,0.4-0.2,0.6-0.2c0.2,0,0.6,0.2,0.6,0.2 C84.2,41,84.5,40.7,85.1,40.6z M83.7,41c-0.4-0.1-0.7,0.2-0.3,0.6c0.2-0.4,0-0.1,0.3-0.2C83.8,41.2,83.6,41.1,83.7,41z M93.5,62.8 c0.1,0.5,0.3,0.9,0.7,0.8C94.1,63.3,93.8,63,93.5,62.8z M93,71.2c-0.1-0.1-2.5,1.6-2.9,2.1c0.8,0.5,2.9-1.2,3.1-2.1 C93,71.5,92.9,71.2,93,71.2z M95,69.9c-0.4,0.2-0.6,0-0.5-0.4c0,0.1-0.1,0.2-0.1,0.3c0.1-0.5,0.1-0.8-0.1-1.1 c-0.3,0.7,0.1,1.4-0.7,2c0.3,0.3,0.3,0.4-0.1,0.7c0.1,0,0.1,0.1,0.1,0.2C93.9,71.3,95,70.2,95,69.9z M82,50.6 c0.2-0.2,0.3-0.2,0.3-0.5c-0.1,0-0.3-0.1-0.4-0.1C81.9,50.2,81.9,50.4,82,50.6z M82.4,50.6c-0.3-0.4-0.2,0.1-0.1,0.5 c0.2-0.3,0.3-0.5,0.2-0.9C82.5,50.4,82.4,50.5,82.4,50.6z M82.8,49.7c-0.1,0-0.2,0-0.3,0c0,0.1,0.2,0.4,0.2,0.5c-0.1,0-0.1,0-0.2,0 c0.1,0.2,0.1,0.3,0.2,0.5c0.1-0.2,0.1-0.2,0-0.5c0.1,0,0.2,0.1,0.2,0.1C83,50.1,82.9,49.9,82.8,49.7z M81,51 c0.2-0.3,0.3-0.4,0.2-0.8c-0.1,0.5-0.4,0.8-0.6,1.2C80.8,51.3,80.9,51.1,81,51z M81.2,48.6c0.1,0.2,0.1,0.5,0.3,0.3 c0,0.4,0.3,0.6,0.6,0.6c0,0,0-0.1,0.1-0.1c0.1,0.2,0.2,0.3,0.4,0.4c0-0.7-0.6-0.5-0.8-1c-0.2-0.4,0.2-0.9,0-1.4 c-0.5-0.1-0.6,0.3-0.4,1c0,0-0.1-0.1-0.1-0.1C81.1,48.3,81.1,48.4,81.2,48.6z M83.3,52.2c0.1-0.5,0.1-1.1-0.3-1.4c0,0.1,0,0.2,0,0.3 c-0.4,0.2-0.9,0.1-0.9,0.8c0.7-0.7,0.4,0.2,1,0.5c0-0.2,0.1-0.5,0.1-0.7C83.2,52,83.3,52.1,83.3,52.2z M81.5,49.6 c0.1-0.1,0.3-0.1-0.2-0.3C81.4,49.4,81.5,49.5,81.5,49.6z M91.8,57.4c0.1,0.1,0,0.2,0.2,0.1c-0.1-0.2-0.2-0.5-0.3-0.7 C91.6,57,91.7,57.1,91.8,57.4z M90.2,57.3c0.4-0.1,1.1-0.5,0.6-0.9c-0.1,0.4-0.2,0.6-0.4,0.3c-0.1,0-0.5,0.2-0.5,0.3 C89.9,57.2,90,57.2,90.2,57.3z M90.9,56.1c0.1,0.2,0.2,0.3,0.2,0.5c0.1-0.5-0.2-0.8-0.6-0.8C90.7,55.9,90.8,56,90.9,56.1z M90.3,59 c-0.2-0.4-0.7-0.7-1-1.6c0.1,0,0.2,0,0.3,0c-0.7-0.7-1.4-1.7-2.5-1.8c-0.5-0.1-1,0.5-1.3,0.3c-0.5-0.2-0.1-1.4-1.2-0.8 c0.3,0.4,0.6,0.5,0.9,0.6c-0.2,0-0.3,0.1-0.5,0.1c0.1,0.2,0.2,0.4,0.3,0.5c0.1,0,0.2-0.2,0.2-0.2c0.6,0.5,2,1,1,2 c0.6-0.3,0.7,0.4,1.2,0.3c0.4-0.1,0.4-0.5,0.6-0.5C89.2,57.9,89.5,58.9,90.3,59z M93.2,58.5c-0.1,0.1-0.2-0.2-0.2,0.1 C93.3,58.8,93.2,58.6,93.2,58.5z M92.4,57.7c0,0-0.1-0.2-0.2-0.3C92.2,57.6,92.3,57.6,92.4,57.7z M92.9,58c0.1,0.1,0.1,0.1,0.2,0.2 c-0.2-0.2-0.3-0.3-0.5-0.4C92.7,57.8,92.8,57.9,92.9,58z M93.5,59.1C93.6,58.9,93.6,58.8,93.5,59.1z M93.5,58.7c0-0.2,0-0.4-0.2-0.6 C93.3,58.3,93.4,58.5,93.5,58.7z M81,45.9c0.1-0.5,0.2-1-0.1-1.3C80.6,45,80.6,45.5,81,45.9z M94.8,61c0,0,0.1-0.2,0-0.4 C94.7,60.8,94.8,61.1,94.8,61z M94.8,61.2c0.1,0.1,0,0.3,0.2,0.1C94.9,61.1,94.8,61.2,94.8,61.2z M29.5,76.3 c-0.4-0.8-0.5-0.2-0.7-0.2c0.2,0-0.3,0.2-0.3,0.2c-0.2,0-0.6-0.3-0.9-0.4c0.9,0.9,1.9,1.2,2.6,0.7C30,76.6,29.8,76.4,29.5,76.3z M89.6,64.4c0-0.2-0.2-0.3-0.1-0.7c-0.2,0-0.1-0.1-0.3,0c0.1-0.8-0.5-1.1-0.7-1.7c-0.1-0.5,0-1-0.2-1.6c-0.1,0.1-0.1,0.1-0.2,0.2 c0-0.5-0.1-1.1-0.2-1.6c-0.5,0.9-0.5,3.8-1.7,2.2c-0.3-0.5-0.4-0.2-0.4-0.8c0-0.3,0.4-0.5,0.4-0.7c0-0.1-1.1-0.4-1.4-0.5 c0.3,0.3-0.7,0.7-0.8,1.5c-0.5-0.2-0.7-0.4-1.1-0.2c-0.4,0.1-0.7,0.9-0.7,1.1c0,0-0.1,0.1-0.1,0.1c0-0.1,0-0.2-0.1-0.3 c-0.4,0.8-0.6,1.1-1.3,1.4c-0.6,0.3-1.1,0.4-1.6,1c0-0.1,0-0.2,0-0.3c-0.3,0.6-0.5,1.1-0.3,1.8c-0.1-0.1-0.1-0.2-0.2-0.3 c0,0.1,0,0.3,0,0.4c0-0.1-0.1-0.1-0.1-0.2c0.1,1,0.1,1.7,0,2.7c0,0.4-0.6,0.5,0,0.9c0.4,0.2,0.7-0.3,1-0.4c0.8-0.2,1.4-0.5,2.3-0.7 c1.4-0.5,1.7-0.2,2.1,1.1c0.2-0.3,0.5-0.6,0.8-0.8c-0.1,0.4-0.3,0.7-0.6,1c0.2-0.1,0.3-0.2,0.5-0.4c-0.1,0.2-0.1,0.3-0.2,0.5 c0.5,0.2,0.5,2.1,1.5,0.9c0,0.1-0.1,0.1-0.1,0.2C86.9,71.3,90.8,66.1,89.6,64.4z M85.9,71.3c-0.4-0.2-1,0.2-0.7,0.8 c0.2,0.6,0.9-0.4,1.1-0.9C86.2,71.2,86.1,71.2,85.9,71.3z M24.6,44.3c0-0.2,0.2-0.3-0.1-0.5C24.5,44,24.6,44.2,24.6,44.3z M24.2,44.9c0.1,0.1,0.1,0.2,0.1,0.4c0.1-0.2,0.1-0.3,0-0.6C24.1,44.6,24.3,44.8,24.2,44.9z M24.4,43.9c-0.2,0-0.3-0.1-0.3,0.2 C24.3,44.1,24.4,43.9,24.4,43.9z M36.2,56.9c-1-0.3-1.6-1.5-2.7-1.1c0-0.7-0.8-0.9-1.2-0.6c0-0.4-0.4-0.5-0.5-0.8 c-0.1-0.1-0.1-0.7-0.2-1c-0.3-0.7-0.6-0.8-1.2-1.1c-0.6-0.3-0.6-0.2-1.1-0.8c-0.3-0.4-0.6-0.7-1-1c0.1,0,0.2-0.1,0.3-0.1 c-0.9-0.2-1.7,0.6-2.3-0.6c-0.4,0.3-0.4,0.8-0.6,1.2c0-0.3,0-0.7,0-0.9c0.4-0.6-0.1-0.2-0.5,0.1c-0.3,0.2-0.7,0.9-1,1 c0,0-1.6-0.3-1.6-0.3c-0.8-0.7,0.1-1.4-0.1-2.2c-0.2-0.8-1.1-0.3-1.6-0.5c0.2-0.3,0.3-0.7,0.3-1.1c0.1,0,0.1,0,0.1,0.1 c0.2-1.2,0.5-1.7-0.7-0.8c-0.6,0.5-1.3,1.5-1.8,0c-0.3-0.8,0-2.4,0.4-3.1c0.7-1.1,1.6-0.5,2.3-0.6c-0.1-0.7,1.4-0.4,1.6-0.3 c0.2,0.3,0.2,2.8,0.8,1.6c0.5-1-0.4-1.7,0.5-2.7c0.6-0.7,2-1.1,1.3-2.2c0.1,0,0.1,0,0.2,0.1c0-0.2,0-0.3,0.1-0.4 c0,0.4,0,0.4-0.1,0.8c0.3-0.4,0.3-0.4,0.3-0.9c0.1,0.1,0.1,0.1,0.1,0.2c0.2-0.3,0.4-0.5,0.4-0.7c0,0,0.4-0.1,0.6-0.1 c-0.1,0-0.3,0-0.5,0c0.4-0.2,0.8-0.2,1.1-0.4c-0.1,0,0,0-0.2,0c-0.1-0.9,1.4-1.5,1.9-1.4c-0.5,0.2-0.4,0.3-0.6,0.7 c0.5-0.1,1.4-0.5,1.9-0.9c0-0.1-0.1-0.3-0.1-0.4c-0.6,1.2-1.7-0.1-0.8-0.7c-0.7-0.6-1.3,0.5-2,0.8c0.5-0.5,1.1-1.2,1.7-1.3 c0.8-0.2,1.5,0.2,2.2-0.4c1.2-0.9,0.1-1.1-0.6-1.9c0.2-0.5-0.1-0.9-0.2-1.5c-0.5,0.5-1.8,1-1.1-0.3c-0.5,0-0.6-0.4-1.2-0.4 c-1,0-0.4,0.7-1.2,1.3c0.6,0.8-0.3,1.4-0.9,1.5c0.6,1.6-1.5,1.4-0.5-0.2c-0.8,0-1.4-1-2.2-0.7c0-0.6,0.1-0.4-0.3-0.7 c0.5-1.3,2.5-2.2,3.5-2.7c0.3-0.1,1.4-0.2,1.3-0.9c-0.2-1-1.3,0.4-1.7,0.6c0.1-0.2,0-0.2,0.1-0.5c-0.2,0-0.2-0.2-0.6,0 c0.1-0.1,0.1-0.2,0.2-0.3c-0.1,0-0.2,0-0.4-0.1c0.7-0.6-0.4-1-0.8-0.1c0.5,0.5-0.1,0.7-0.5,1c0.1-0.1,0.1-0.2,0.2-0.3 c-0.5-0.2-1,0.1-1.6,0c-0.4-0.1-0.7-0.4-1.2-0.1c0,0,0.1,0.1,0.1,0.1c-0.4,0.1-1.1,0.1-1.7,0c0.1-0.1,0.3-0.1,0.4-0.2 c-0.6-0.3-1.5-0.7-2.1-0.3c0.1-0.1,0.1-0.2,0.2-0.3c-0.4,0.3-0.9,0-1.4,0c-0.6,0.1-1.2,0.4-1.8,0.4c-0.6,0-2.5-0.4-2.7-0.6 c-1.3-0.2-2.7,0.3-4,0.8c0.3,0.2,0.3,0.4,0.4,0.8c-0.2,0-0.3,0-0.5,0c0.1-0.1,0.1-0.1,0.2-0.2c-0.4,0-0.9,0.2-1.3,0.3 c0.2,0.7,0.9,0.5,1.4,0.3c-0.3,0.5-0.9,0.4-1.5,0.6c-0.5,0.2-1.4,1.3-0.4,1.1c-0.1,0.1-0.1,0.3-0.3,0.5c0.2-0.1,0.3-0.1,0.5-0.1 c0,0.1,0,0.1-0.1,0.2c0.1,0,0.1-0.1,0.2-0.1c0,0.1,0,0.1,0,0.2c0.2-0.1,0.4-0.1,0.6-0.2c-1,0.9-2.2,1-3.2,1.7 c2.1-0.4,3.5-1.8,5.4-2.6c-0.3,0.1-0.7,0.4-0.8,0.8c0.8-0.2,1.2-0.4,1.9-0.4c0.8,0.1,1.3,0.9,2.1,0.8c-0.1,0.6-0.1,1.8,0.3,2.2 c-0.6,0.8,1.3,1,0.4,2c-0.2-1.2-0.9,1-1.2,1.6c-0.4,0.8-0.5,2-0.2,2.8c0.2,0.4,1.7,3,0.9,3.3c0.6,0.7,0.6,1.2,1,2 c0.6-0.7-1.1-2.5-0.6-3.6c0.4,0.2,0.8,1.8,1,2.3c0.2,0.4,0.6,1.1,0.8,1.6c0.1,0.7-0.2,0.6,0.2,1.3c0.2,0.4,0.9,0.7,1.3,0.9 c0.5,0.3,1,0.1,1.3,0.2c0.8,0.3,1.4,1.1,2.1,1.3c0,0-0.1,0-0.1,0c0.4,0.5,0.5,0.9,0.7,1.3c0.1-0.1,0.1-0.1,0.1-0.2 c0.4,0.6,0.9,1.2,1.4,1c-0.1-0.8,0.3-0.4,0.5-0.1c0.3,0.5,0.3,1.3,0.2,1.7c-0.2,0.7-1.6,1.6-0.9,2.5c0-0.1,0.1-0.1,0.1-0.2 c0,0.6-0.4,0.8-0.3,1.5c0.1,0.3,0.7,1.2,0.9,1.6c0.3,0.7,0.5,1.6,1,2.1c0.5,0.6,1.3,0.7,1.6,1.4c0.3,0.7,0.2,2,0.2,2.8 c0,1,0.2,1.8,0.2,2.7c0.1,1.2-0.5,3.5,0.3,4.4c0-0.2,0-0.3,0-0.5c0.3,0.3,0.2,0.4,0.3,0.9c-0.1,0-0.2-0.1-0.3-0.1c0,0.5,0,0.6-0.1,1 c0.1,0,0.3,0.1,0.4,0.1c-0.8,1.1,0.7,2.6,1.6,2.7c-0.1-0.5,0.1-0.6,0.6-0.6c-0.6-0.4-0.2-0.6-0.2-1c0-0.2,0.3-0.7,0.3-0.7 c0-0.2-0.3-0.5-0.3-0.4c0-0.1-0.3-0.3-0.3-0.6c0-0.2,0.4-0.2,0.4-0.2c0.1-0.5-0.2-0.7,0.3-1c0-0.1-0.1-0.1-0.1-0.2 c-0.8,0,0-0.5,0-0.4c0.1-0.3,0.5-0.3,0.1-0.9c1.8,0.4,1.2-1.1,0.8-2c1,0.9,1.4,0,1.9-1c0.6-1.3,0.3-2.4,1.5-3.2 c0.7-0.5,0.7-0.1,1.1-1c0.3-0.8,0.3-1.4,0.4-2.2C35.4,59.7,36.6,58.3,36.2,56.9z M24.2,26.2c-0.2,0-0.3-0.1-0.5,0 C23.9,26.6,23.9,26.3,24.2,26.2z M22.4,25.3c-0.2,0.1-0.4,0.2-0.5,0.3c0.4,0.1,0.8,0,1.2,0c-0.2,0-0.4,0.2-0.6,0.2 c0.5,0,1.7,0,2-0.5c-0.2,0-0.3,0-0.4,0c0-0.1,0-0.2,0.1-0.3c-0.4,0.1-0.3-0.1-0.4,0.4C23.3,25.5,22.8,25.2,22.4,25.3z M24.2,27.3 c-0.5-0.1-0.6-1.9-1.2-0.5c0-0.6-0.7-0.4-1.2-0.3c0.1-0.1,0.1-0.1,0.2-0.2c-0.5-0.1-1.1,0.2-1.5,0.5c0.2,0,0.4,0.1,0.7,0.1 c-0.2,0-0.4,0.1-0.6,0.1c0.3,0.2,0.8,0.1,1.2,0.2c-0.4,0-0.8,0.1-1.2,0.1C21.2,28.1,23.6,27.9,24.2,27.3z M24,24.9 c0-0.3-0.3-0.1-0.7,0C23.6,25,23.8,24.9,24,24.9z M21.6,25.4c0.4-0.1,0.9-0.1,1.2-0.5c-0.6,0-1.2,0.2-1.8,0.5 C21.2,25.4,21.4,25.4,21.6,25.4z M32.4,34.8c-0.1,0-0.2,0.2-0.3,0c0,0,0.1-0.1,0.1-0.1c-0.1,0-0.3,0-0.4,0c0.2-0.2,0.3-0.5,0.5-0.7 c-0.6,0.1-1.2,1.1-1.3,1.6c0.3,0,0.7,0,1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0.1-0.1,0.4-0.2,0.5-0.3c0,0.1,0,0.2-0.1,0.4 c0.4,0,0.5-0.3,0.4-0.7c-0.1,0-0.1,0-0.2,0.1c0-0.1,0.1-0.2,0.1-0.3C32.6,34.9,32.5,34.9,32.4,34.8z M14,35c0.7,0.6,0.5-0.1,0.2-0.5 C13.7,34.1,13.5,34.6,14,35z M19.6,27.1c0.8-0.1,1.5-0.7,2.3-0.8c-0.9-0.9-1.9,0-2.6,0.5C19.5,26.8,19.5,27,19.6,27.1z M27.7,29.4 c-0.8-0.6-0.7-0.5-1.6,0.2c0.1,0,0.4,0.2,0.3,0.2C27,29.4,27.6,29.7,27.7,29.4z M13.3,33.1c-0.2,0.2-0.3,0.4,0,0.7 c0.1-0.2,0.2-0.5,0.3-0.7C13.4,33.1,13.4,33.1,13.3,33.1z M27.5,30.1c0.1,0,0.1,0.3,0.2-0.1C27.6,30,27.6,30.1,27.5,30.1z M29.8,36 c-0.1,0,0-0.3-0.2-0.1c0.3,0.2,0.2,0.2,0.6,0.1C30.1,36.1,29.9,36.1,29.8,36z M26.7,30c0.2,0,0.3,0.1,0.6-0.2 C27,29.8,26.9,29.9,26.7,30z M30.5,35c-0.2-0.2-0.3-0.3-0.6-0.3C30.1,34.9,30.3,34.9,30.5,35z M27,25.3c0,0.2,0.1,0.2,0,0.5 c0.7,0.2,2.2,0.4,2.7-0.2c-0.7-0.3-1.4,0.1-2.1-0.2c0,0,0.1-0.1,0.1-0.1c-0.4-0.2-0.8-0.3-1.3-0.1C26.7,25.3,26.8,25.3,27,25.3z M26.8,24.9c0.2,0,0.3,0,0.5,0C27.2,24.8,26.9,24.9,26.8,24.9z M27.5,24.4c0.1,0,0.2,0,0.4,0c-0.1,0.1-0.2,0.1-0.3,0.2 c0.6,0.4,1.2,0,1.8-0.2c-0.5-0.6-1.3-0.6-2-0.2C27.3,24.4,27.4,24.2,27.5,24.4z M26.3,25.8c0.2,0,0.3,0.1,0.5-0.1 C26.6,25.6,26.1,25.4,26.3,25.8z M27,24.8c-0.1-0.2-0.1-0.3-0.5,0C26.8,24.9,26.8,24.7,27,24.8z M29.7,26.4c0.1,0,0.3,0,0.5,0 c-0.2-0.3-0.6-0.4-0.9-0.2C29.4,26.5,29.4,26.4,29.7,26.4z M26.9,26c-0.5-0.1-0.9,0.1-1,0.7c0.5-0.1,1-0.3,1.4-0.6 C27.1,26.1,27,26,26.9,26z M31.5,27.3c-0.4-0.3-0.7-0.5-1.2-0.4c-0.2-0.6-0.9-0.4-1.3-0.2c0.3-0.8-0.6-0.5-1-0.2 c0-0.1,0-0.1-0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.2c-0.6,0-1.1,0.2-1.4,0.8c0.1,0,0.2,0,0.3,0C27.1,27,27,27,26.9,27.1 c0.6,0.3,2.7,0.1,2.5,0.6c0.8,0.1,0.7,0.4,0.2,0.9c-0.3,0.3-0.9,0.1-1.3,0.6c0.5,0.2,0.9-0.2,1.4,0.3c0,0-0.1,0.1-0.1,0.1 c0.4,0.3,0.8,0.5,1.2,0.5c-0.1-0.2-0.2-0.5-0.4-0.7c1.4,1.5,0.5-0.9,0.4-0.7c0.3-0.6,0.9,0.8,1.6-0.4c-0.5-0.1-0.8-0.5-1.3-0.6 c0.2-0.1,0.3-0.1,0.5-0.2C31.6,27.5,31.5,27.4,31.5,27.3z M25.7,24.7c0.2,0.1,0.4,0.1,0.6,0.1c-0.1-0.4-0.5-0.5-0.9-0.3 c0.1,0,0.1,0,0.2,0.1c-0.1,0-0.2,0.1-0.3,0.1C25.4,24.7,25.5,24.7,25.7,24.7z M29,24c0.5,0.1,0.9,0.1,1.4,0.1 c-0.3,0.1-0.7,0.1-1,0.1c0.1,0.2,0,0.1,0.2,0.3c-0.2,0.1-0.5,0.2-0.8,0.3c0.2,0.1,0.3,0.2,0.4,0.3c-0.4-0.2-0.8,0-1.1,0.3 c0.7,0.1,1.9,0.3,2.5-0.2c-0.1,0-0.2,0-0.4,0c0.4-0.3,1-0.4,1.2-0.7c-0.1,0-0.2,0-0.3,0c0.9,0,1.8-0.4,2.7-0.6c-0.1,0-0.3,0-0.4,0 c0.4-0.1,0.9-0.1,1.3-0.3c-1.6-0.4-4.4-0.4-5.9,0.3C28.9,23.8,28.9,23.9,29,24z M29.5,28.2c-0.2-0.3-0.3-0.3-0.5,0.2 C29.3,28.4,29.4,28.3,29.5,28.2z M24.4,24.6c-0.2,0-0.4-0.1-0.6,0.1C24,24.7,24.2,24.6,24.4,24.6z M25,27.4c-0.2,0-0.4,0-0.7,0.2 c0.3,0.2,0.6,0.2,0.9,0.1C25.2,27.4,25.1,27.5,25,27.4z M24.4,26.5c0.4,0.5,0.9,0.5,1.3,0c-0.1,0-0.2-0.1-0.2-0.1 c0.2-0.1,0.2-0.1,0.3-0.3c-0.4,0-0.9-0.1-0.9,0.3C24.7,26.4,24.6,26.5,24.4,26.5z M25.3,25.7c0.4,0.2,0.9-0.1,0.9-0.5 c-0.4,0-0.8,0-1.1,0.4C25.5,25.4,25.3,25.7,25.3,25.7z M78.1,46.7c-0.7,0.3-0.2,0.9,0,0.7C78.4,47,78.4,46.8,78.1,46.7z M24.7,46.8 c0.2,0,0.3,0,0.4-0.2c-0.8-0.5-2-1.9-3-0.7c0.3-0.1,0.6-0.2,0.9-0.3c0,0-0.1,0.1-0.1,0.1c0.6,0.3,1,0.3,1.4,0.8 c-0.1,0.1-0.1,0.2-0.2,0.2C24.3,46.7,24.5,46.8,24.7,46.8z M55.7,40.5c-0.1,0.1-0.2,0.1-0.4,0.1c0.4,0.2,0.3,0.1,0.6-0.2 C55.9,40.4,55.8,40.4,55.7,40.5z M49.5,32.8c0.1-0.4,0.2-0.6-0.3-0.4C49.2,32.7,49.3,32.7,49.5,32.8z M48.9,38.1 c0-0.3,0.1-0.4,0-0.7C48.6,37.7,48.8,37.8,48.9,38.1z M45.1,32.6c0.1-0.1,0.1-0.3,0.2-0.1c0,0.1,0.4,0.4,0.4,0.6 c0,0.4-0.6-0.1-0.3,0.6c-0.1,0-0.2,0.1-0.3,0.1c0.1,0,0.3,0.2,0.5,0.2c-0.2,0.1-0.4,0.3-0.6,0.5c0.7,0,1.9,0,1.9-1 c-0.6-0.2-0.6-1-1.2-1.2c0.2-0.2,0.2-0.5,0.3-0.6c-0.2,0-0.3,0-0.5,0c0.1-0.1,0.2-0.3,0.3-0.4C45,31.2,44.9,32,45.1,32.6z M53.3,40.5c-0.2,0-0.2,0.1-0.4-0.1c0,0.1,0,0.1,0,0.2c0.3,0.1,0.5,0.2,0.8,0C53.5,40.5,53.5,40.5,53.3,40.5z M41.5,27.3 c-0.3,0-0.6,0-0.9,0c0-0.1,0.2-0.4,0.2-0.4c0.3,0.3,0.4,0.3,0.8,0.3c-0.2-0.3-0.2-0.4-0.6-0.6c0.1,0,0.3,0,0.5,0 c-0.1-0.1,0-0.2-0.2-0.4c0.3,0,0.5-0.1,0.7-0.2C42,26,42,26,41.9,26c0.2,0,0.3,0,0.5,0c-0.1-0.1-0.2-0.2-0.2-0.3 c0.3-0.2,0.3-0.2-0.1-0.5c0.2,0,0.5-0.1,0.7-0.1c-0.3-0.4-0.2-0.7,0.3-0.9c-0.2,0-0.3,0-0.5,0c0.5,0,1-0.2,1.6-0.3 c-0.6-0.3-1.5-0.1-2.1,0c0.1-0.1,0.2-0.1,0.2-0.2c-0.6-0.1-1.3-0.1-1.9-0.1c0.7,0,1.5,0.1,2.2-0.1c-1.4-0.2-3.8-0.7-5,0.1 c0.1,0,0.3,0.1,0.4,0.1c-1.6-0.3-3.3-0.2-4.8,0.4c0.2,0,0.3,0.1,0.5,0.1c-0.6,0.3-1.4,0.1-1.9,0.5c0.4,0.1,0.8,0.2,1.2,0.2 c-0.3,0-0.7,0-1,0.1c0.2,0.2,4.1,0.7,2.5,1.7c0.3,0.1,0.5,0.2,0.8,0.4c-0.9-0.5-1,0.9,0,0.2c-0.6,1-1.2,0.7-0.8,2.1 c0.2,0.7,0.5,0.9,0.9,1.1c0.7,0.4,0.6,0.2,1.1-0.4c0.1-0.1,0.4-0.9,0.6-1.1c0.4-0.3,0.8-0.2,1.1-0.4C39.3,28.2,40.4,27.9,41.5,27.3z M25.3,47.4c0.3,0.1,0.4-0.1,0.6,0.3c0.2-0.4,0.6-0.3,0.9-0.4c-0.3-0.4-0.9-0.7-1.4-0.4c0.2,0.2,0.1,0.2,0.3,0.4 c-0.2,0-0.3,0.1-0.6,0C25,47.6,25.1,47.4,25.3,47.4z M80.8,58.3c0.1,0,0.2-0.1,0.3-0.1C81,58,80.7,58,80.5,58.4 C80.6,58.4,80.7,58.3,80.8,58.3z M82.5,56.6c-0.2-0.4-0.3-0.7-0.5-1.1c0.2-0.1,0.3-0.3,0.5-0.3c0-0.1,0-0.1,0-0.2 c-0.4,0.2-1.4,0.1-0.8-0.4c0.5-0.4,1.2,0.5,1.3-0.5c-0.4,0.6-0.9,0-1.3,0.2c-0.3,0.2-0.5,1.1-0.5,1.5c0,0,0.3,1.2,0.2,1.2 c0.4,0.2,0.2-0.9,0.4-1.2c0,0.4,0.1,0.6,0.2,0.9c0.1-0.1,0.2-0.1,0.3-0.2c-0.1,0.3,0,0.3,0,0.5C82.5,56.9,82.4,56.8,82.5,56.6z M78.5,55.3c0.1,0.8,1.5,1.1,1.9,1.1c0.1-0.7,0.3-1.8,0.9-2c-0.6-0.8-0.4-1.3,0-1.8c-0.4-0.2-0.5-0.6-0.8-0.5 c-0.3,0.1-0.6,0.9-0.8,1.1C79.1,53.9,77.9,54,78.5,55.3z M85.8,57.1c-0.1,0.1-0.2,0-0.2,0.5C85.8,57.4,85.7,57.2,85.8,57.1z M83.6,56c-0.1,0-0.2,0-0.3,0C83.6,56.5,83.5,56.1,83.6,56z M81.6,58.9c-0.1-0.2-0.1-0.4-0.5-0.3C81.3,58.8,81.4,58.8,81.6,58.9z M82.3,58.2c-0.1-0.2-0.5-0.1-0.8,0.1C81.7,58.4,82,58.3,82.3,58.2z M78.7,58c0.5,0.1,1,0.2,1.5,0.1c-0.6-0.3-2.6-1.5-3-0.6 C77.7,57.7,78.2,57.8,78.7,58z M77.4,56.5c0.3-1-2-4.1-3.1-3.9c0.4,0.9,1,1.6,1.5,2.5C76,55.4,77.5,58.3,77.4,56.5z M84.2,56.1 c0.2,0.1,0.3,0,0.5,0.2c-0.2-0.5-0.6-0.6-0.9-0.2C84,56.1,84.1,56.1,84.2,56.1z M83.9,55.1c0.1-0.4,0.3-0.8-0.1-1.2 C83.7,54.3,83.7,54.7,83.9,55.1z M82.7,58.8c0.2-0.3,0.6-0.5,0.9-0.7c-0.5,0-1,0.2-1.2,0.8C82.5,58.9,82.6,58.9,82.7,58.8z M44.1,33.6c-0.1,0.1-0.1,0.3-0.2,0.4c0.4,0.1,1.4-0.5,1.1-1C44.7,32.3,44,33,44.1,33.6z M41.8,29.6c0.5,0.1,1.1-0.1,1.5-0.5 c0-0.1-0.2-0.4-0.2-0.5c-0.6,0.1-1.9-0.2-2.3,0.3c0.2,0,0.3,0.1,0.5,0.1c-0.1,0-0.2,0.1-0.4,0.2c0.2,0.1,0.3,0.1,0.5,0.2 c-0.1,0.1-0.2,0.1-0.2,0.2C41.4,29.5,41.6,29.5,41.8,29.6z M48.7,38.5C48.8,40.2,49,37.2,48.7,38.5z M50.5,39.4 c-0.2,0-0.4,0.1-0.6,0c0.1,0.3,0.4,0.5,0.7,0.6C50.7,39.5,50.6,39.5,50.5,39.4z M24.1,47.3c-0.1,0.1-0.2-0.1-0.2,0.1 c0.3,0.2,0.3,0.2,0.6,0.1C24.4,47.3,24.3,47.4,24.1,47.3z M70,51c-0.1-0.1-0.1-0.1-0.2-0.2C69.3,52.7,70.9,52.3,70,51z M61,60.2 c0-0.2-0.1-0.4-0.2-0.6c-0.1,0.3-0.3,0.5-0.4,0.7c-0.1,0.8-0.9,0.8-1.1,1.4c-0.2,0.4,0.1,0.7,0,1.1c-0.1,0.4-0.3,0.6-0.4,1 c-0.1,1.2,0.5,1.5,1.1,0.7c0.5-0.7,0.9-2.6,0.9-3.5c0,0.1,0.1,0.2,0.1,0.2C61.1,60.9,61,60.6,61,60.2z M74.3,48.1 c-0.9,0.8-1-2.4-2-2.6c0,0.2,0,0.2,0,0.4c-0.3-0.1-0.5,0-0.9,0.1c0.1,0.9-1.3,1.5-1.5,2.2c-0.2,0.6-0.2,2.1-0.3,2.7 c-0.1,0.1-0.3,0.4-0.5,0.5c-1-1.2-1.5-3.8-1.8-5.4c-0.6,0.6-1.1-0.6-1.6-1c-0.5-0.5-0.4-0.4-1.1-0.5c-0.5-0.1-0.9,0.1-1.3-0.1 c-0.4-0.2-0.5-0.6-0.8-0.7c-0.3-0.1-0.5,0.2-1,0c-0.7-0.3-0.8-1.5-1.5-1.1c0.1,0.9,0.8,1.3,1,2.1c0-0.2,0.1-0.4,0.1-0.5 c0.1,1.3,1,0.8,1.4-0.1c-0.1,0.9,0.5,0.7,0.8,1.1c0.4,0.8,0.2,0.6-0.1,1.2c-0.4,1-0.6,1.2-1.5,1.7c-0.6,0.4-2,1.9-2.6,1.1 c-0.3-0.4-0.1-0.9-0.2-1.3c-0.2-0.5-0.7-1-0.9-1.4c-0.4-0.8-1.8-3-1.6-3.7c0,0.3-0.2,0.5-0.2,0.7c-0.2-0.3-0.4-0.5-0.5-0.9 c0.1,0.8,0.6,1.5,0.9,2.2c0.3,0.7,0.4,1.4,0.7,2.1c0.3,0.7,2,2.5,1.7,3c0.5,0.9,1.8,0.2,2.4-0.1c0.1,3.4-3.7,4.9-3.4,7.8 c0.1,1.4,0.7,2.7-0.3,3.9c-0.7,0.8-1,0.7-1.1,1.7c0,0.5,0.2,0.8-0.1,1.3c-0.1,0.2-0.6,0.3-0.7,0.5c0,0.1,0,0.5-0.1,0.7 c-0.2,0.5-0.5,1.1-0.9,1.5c-0.5,0.6-0.9,0.8-1.4,1c-0.2,0.1-1.4,0.4-1.5,0.4c-0.6-0.2-0.2-0.7-0.3-1.2c-0.2-0.8-0.6-1.4-0.8-2.2 c-0.2-0.9-0.2-1.6-0.5-2.5c-0.3-0.8-0.5-1.3-0.2-2.2c0.3-1.4,0.5-2.2,0.1-3.5c-0.3-1-0.9-1.5-0.9-2.5c0-0.8,0.3-1.3-0.2-1.9 c-0.9,0.6-1.1-0.8-2.2-0.5c-0.7,0.2-1.9,0.8-2.6,0.6c-1.5-0.3-2.2-3.1-2.8-4.2c0.8-0.8,0.2-2.2,0.4-3c0.1-0.4,0.4-1.2,0.6-1.5 c0.4-0.6,0.9-0.7,1.2-1.3c0.5-0.8,0.3-1.3,1-2c0.8-0.9,0.3-0.3,1.4-0.5c0.9-0.1,2.7-1.4,3.4-0.6c0.1,0,0.2-0.1,0.2-0.1 c-0.2,0.8-0.3,1.2,0.3,1.7c0.5,0.4,1.7,1.1,2.2,0.8c0.1,0,0-0.6,0.5-0.7c0.2-0.1,0.7,0.4,0.9,0.5c0.5,0.2,1.7-0.1,1.9,0.3 c0.9,0.2,1-1.5,1-2.3c-0.6,0-1.4,0.3-1.9,0.1c-1.2-0.5-0.9-1.5,0-1.9c0.4-0.2,1.1-0.3,1.6-0.3c0.4,0,1,0.7,1.4,0.3 c0.6-0.6-0.9-1.3-1.3-1.6c0.3-0.4,0.2-0.2,0.2-0.5c0.1-0.1,0.2-0.1,0.4-0.2c-0.4-0.1-1.6,0.5-0.6,0.6c-0.4,0.4-0.8,0.5-1.1,0.1 c0.1-0.1,0.2-0.1,0.3-0.2c-1-0.9-1.9,1.4-1,1.8c-0.2,0.1-0.5,0.3-0.7,0.5c-0.2-0.4-0.3-0.3-0.7-0.2c0.1,0.1,0.1,0.1,0.2,0.2 c-0.3-0.1-0.2,0.1-0.4-0.1c0,0.5,0.2,0.7,0.4,1.1c-0.1,0-0.2-0.1-0.3-0.1c0.1,0.2,0.1,0.2-0.1,0.2c0,0.1,0.1,0.2,0.1,0.4 C52,40,52,38.4,51.7,37.9c-0.3-0.5-1.4-1.3-1.6-1.2c-0.1-0.2,0-0.2,0-0.3c-1.3,0,1.2,2,1.3,2.3c-0.7-0.5-0.1,0.3-0.7,0.8 c0.3-1-0.8-1.3-1.3-1.8c-0.6-0.6-0.2-0.5-0.9-0.6c-0.5-0.1-1.1,0.5-1.3,0.7c-0.8,0.6-0.7,1.7-1.5,2.2c-0.8,0.5-1.1-0.4-1.8-0.1 c-0.1-0.5-0.2-2.3,0.1-2.6c0.4-0.5,1.5,0.4,1.9-0.1c0.7-0.8-0.5-1.5-0.8-2c0.3,0,0.5-0.1,0.8,0c0-0.1-0.1-0.3-0.1-0.4 c0.5,0.3,0.9-0.3,1.2-0.6c0.3-0.3,0.8-0.7,1-0.9c0.1-0.2,0.3,0.2,0.4-0.1c0,0-0.1-0.3-0.1-0.4c0.2-0.4-0.2-0.8,0.5-1 c0,0.1,0.1,0.4,0.1,0.5c-1.1,0.9,1.1,0.8,1.5,0.7c0.6-0.1,0.7,0.1,1.1-0.3c0.2-0.2-0.2-1.4,0.7-0.6c0-0.2,0-0.3,0-0.5 c-0.2-0.1-0.1-0.1-0.3-0.3c0.5-0.2,0.9,0,1.3-0.3c-0.6-0.4-1.5,0.5-1.9-0.3c-0.4-0.7,0.2-1.2,0.8-1.5c-0.5-0.8-0.9,0.1-1.2,0.5 c-0.7,0.9-0.3,0.8-0.4,1.8c0,0.2-0.6,1.4-0.9,1.3c-0.4-0.1-0.7-1.2-1-1.4c-0.3-0.1-1.5,0.8-1.2-0.8c0.1-0.6,1.1-1,1.6-1.5 c1-1.1,2.6-2.5,4.1-1.6c-0.1,0-0.2,0.1-0.3,0.1c0.4,0.2,2.3,0.3,2.6,0.9c0.4,1-1.2,0.3-1.6,0.4c0.5,0.3,0.5,0.9,1.1,1 c-0.1-0.1-0.1-0.2-0.2-0.3c0.2,0,0.6,0,0.9,0c-0.1-0.1-0.1-0.2-0.2-0.3c0.3-0.3,0.6-0.4,0.9-0.2c0-0.3-0.1-0.6-0.3-0.9 c0.4,0,0.6,0.1,0.8,0.3c-0.1,0-0.2,0-0.3,0c0.4,0.6,1.1-0.3,1.9-0.4c-0.1,0.1-0.1,0.1-0.2,0.2c0.5,0,1.2-0.1,1.6-0.3 c-0.1-0.1-0.2-0.1-0.3-0.2c0.6-0.2,1.5,0.2,2.1,0.5c0-0.1,0.1-0.1,0.1-0.2c-0.7-0.3-1.2-1.5-0.2-1.4c0.5,0,1.4,1.7,1,2.2 c0.4,0,0.5-0.1,0.6-0.5c-0.4-0.4-0.6-0.8-1-1.2c0.1-0.1,0.2-0.1,0.3-0.2c-0.1-0.1-0.1-0.2-0.2-0.2c0.2,0.2,0.4,0.4,0.6,0.6 c-0.1-0.1-0.1-0.2-0.2-0.2c0.4-0.2,0.8-0.2,1.2,0c-0.3-0.2-0.3-0.4-0.5-0.6c0.4-0.1,0.9-0.1,1.3-0.1c-0.1-0.1-0.2-0.1-0.3-0.2 c0.6-0.7,1.8-0.5,2.7-0.6c0.1-0.4,0.5-0.5,0.9-0.3C68.1,25,68,25,67.9,25c0.7,0.2,1.8-0.1,2.3,0.6c-0.2,0.1-0.5,0.3-0.7,0.4 c1.1,0.1,2.1,0.5,3.2,0.4c-0.1-0.1-0.1-0.2-0.2-0.2c1.1,0,1.5,0.7,2.5,1c0-0.1-0.1-0.2-0.1-0.4c0.6,0.2,1.2,0.1,1.8,0.1 c-0.1-0.1-0.3-0.2-0.4-0.3c0.5-0.3,1.7-0.1,2.3,0.1c0.7,0.2,1.4,0.2,2.1,0.4c1.1,0.2,2.5,0.9,3.6,0.7c-0.2-0.1-0.3-0.2-0.5-0.4 c1.8,0.3,2.5,0.3,3.9,1.8c-0.2,0-0.2,0.1-0.5,0.1c0.4,0.2,0.9,0.4,1.2,0.8c-0.6-0.2-1.3,0.2-1.3,0.9c-0.5-0.4-1.1,0-1.6,0 c0,0.9,0.6,0.7,1,1.4c-0.1,0-0.1,0-0.2,0c0.1,0.2,0.2,0.3,0.3,0.5c-0.1,0.1-0.2,0.1-0.3,0.2c0.1,0.1,0.1,0.3,0.2,0.4 c-0.1,0-0.2,0.1-0.3,0.1c0.2,0.4,0,0.4,0,0.7c-0.7-0.7-1.6-1.6-1.8-2.6c0.5-0.2,1-1.7,0.2-1.7c0.2,1-0.4,0.2-0.7,0.3 c-0.4,0.2-1.1,0.3-0.3,0.9c-0.6,0.3-1.3-0.1-2,0c-1.2,0.1-1.2,0.4-1.8,1.7c1.2,0.2,2.2,0.4,2.5,2.1c0.1,0.6,0.1,1.6-0.2,2.1 c-0.4,0.5-0.6,0.3-0.9,0.6c0,0-0.4,0.9-0.4,0.9c0.1,0.5,0.3,0.4,0.6,0.9c1.1,1.9-0.9,1.2-0.5,0.3c-0.2-0.2-0.7-0.8-0.7-0.8 c-0.4-0.2-0.5-0.6-1.1,0c0.4-1.3-0.9-0.4-0.9,0c0,0.9,1.3,0.4,1.6,0.8c-1.4,0.4,0.5,2.1,0.6,2.8c0.2,1.5-0.7,2.5-1.6,3.1 c-0.3,0.2-0.4,0.3-0.8,0.4c-0.1,0,0.1,0.4-0.1,0.4c-0.1,0-0.2-0.3-0.2-0.3c-0.1,0-1-0.5-1,0.7c0,0.8,1.1,1.3,1.3,2.1 c0.2,1.1-0.4,1.4-1,2.1c0-0.5-0.9-1.6-1.4-1.6c0-0.1,0-0.2,0-0.3c-0.1,0-0.2,0-0.3,0c0,0.6-0.1,1.2,0,1.7c0.1,0.4,0.5,0.7,0.7,1.1 c0.4,0.8,0.5,1.3,0.8,2.1c-1.2-0.2-1.1-2-1.8-2.8c0,0.1,0,0.2,0,0.2C75.1,51,75,47.7,74.3,48.1z M53.6,51.4 c-0.1-0.1-0.1-0.1-0.2-0.2C53.5,51.3,53.5,51.4,53.6,51.4z M61.2,39.7c-0.1-0.7-0.4-0.9-0.5-1.5c0.3,0.1,0.3,0,0.5,0 c-0.2-0.4-0.5-0.6-0.5-0.1c-0.1-0.7-0.6-0.8-0.9-1.4c0.1,0,0.2,0,0.3,0c0.2-0.4-0.1-0.3,0.4-0.3c0.1-1-1-0.7-1.3-0.2 C58.7,37,59.4,38,60,38.5C59.1,39.1,60.4,40.4,61.2,39.7z M50.4,24.2c0.4,0.2,1,0.2,1.5-0.1c-0.6-0.2-1.4-0.2-2-0.1 C50.1,24.2,50.2,24.2,50.4,24.2z M51,25c0.1,0,0.3-0.1,0.4-0.1c-0.3-0.1-0.5-0.1-0.8-0.1c0.1,0.3,0.1-0.1,0,0.2 C50.8,24.9,50.9,24.9,51,25z M49.1,24.8c0.1,0,0.2,0.1,0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1c0.7,0.5,0.8-0.4,1.5-0.5 c-0.9-0.3-1.4-0.2-2.2-0.2C48.7,24.5,48.9,24.7,49.1,24.8z M27.1,47.3c0.1,0.1,0,0.4,0.4,0.1C27.4,47.3,27.3,47.3,27.1,47.3z M55.6,24.1c0.3,0.1,0.6,0,0.9-0.1c-0.5,0-0.8,0-1.3,0C55.5,24,55.7,24.2,55.6,24.1z M57.7,26.9c0.4,0.2,0.9,0.4,1.4,0.3 c-2-0.4,1.3-1.7,1.6-1.9c-0.7-0.3-1.8,0.1-2.5,0.5c-0.1,0.2,0,0.1-0.3,0.4c0.1,0,0.1,0,0.2,0C57.7,26.4,57.7,26.6,57.7,26.9z M65.1,24.4c0.5,0.1,1,0.2,1.5,0.2c-0.4-0.6-1.5-0.9-2.1-0.4C64.7,24.1,64.8,24.3,65.1,24.4z M75.7,25.8c0.3-0.1,0.7-0.1,1.1-0.1 c-0.3-0.5-1.3-0.5-1.8-0.4C75.2,25.7,75.4,25.8,75.7,25.8z M67.6,24.6c-0.5-0.2-0.9-0.4-1,0.2C67,24.8,67.5,24.8,67.6,24.6z M76.6,26.1c-0.2,0.1-0.2,0-0.3,0.2c0.3,0.1,0.6,0.1,0.8,0.1C77,26.2,76.8,26.1,76.6,26.1z M5,29.1C5,29.1,5,29.1,5,29.1z M7.7,27 c-0.2-0.1-0.3-0.2-0.6,0.1C7.3,27.1,7.5,27,7.7,27z M82.3,33.9c0.6,0.5,0.9,1.6,1.4,2.3c0-0.1,0-0.2,0-0.3c0.1,0.1,0.2,0.2,0.3,0.2 c-0.3-0.4-0.7-0.7-0.7-1.2c0.2,0,0.3,0.1,0.5,0.1c-0.6-0.6-1.2-1.8-1.8-2C82.1,33.3,82.2,33.4,82.3,33.9z M5.5,28.8 c0,0,0.3,0.1,0.5,0.1c0.1,0.8,1.1-0.1,1.7-0.2c-0.2-0.5-0.7-0.4-1-0.2c0.1-0.1,0.2-0.1,0.2-0.2C6.4,27,5.6,28.5,5,29.1 C5.2,28.9,5.7,28.4,5.5,28.8z M77.6,25.8c0.2,0,0.3,0.1,0.5-0.1c-0.3-0.1-0.7-0.1-1.1-0.1C77.2,25.7,77.3,25.7,77.6,25.8z M85.8,27.1c-0.1-0.1-0.2-0.2-0.3-0.2c0,0-0.1,0.1-0.1,0.1C85.6,27.1,85.7,27,85.8,27.1z M28.5,50.6c0,0,0.1,0.3,0.2-0.2 C28.6,50.3,28.5,50.6,28.5,50.6z M7.1,29.7c-0.3-0.1-0.4-0.2-0.7,0C6.6,29.8,6.8,29.7,7.1,29.7z M9.2,31.6c-0.3,0.1-0.5,0.1-0.5,0.5 c0.2-0.1,0.5-0.2,0.7-0.3C9.3,31.5,9.3,31.7,9.2,31.6z M6.4,30.8c0.2,0,0.3,0.3,0.4,0C6.7,30.7,6.5,30.8,6.4,30.8z"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            calcMode="linear"
                            values="-100 0;0 0"
                            dur="2s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path
                        transform="translate(37.5 0)"
                        fill="#ffffcb"
                        d="M64.4,74.4c0.3,0.3,0.2,0.3-0.3,0.3C64.1,74.3,64.2,74.5,64.4,74.4z M31.4,75.4c-0.2,0.1-0.3-0.2-0.5,0.1c0.3,0.2,0.6,0.1,0.8-0.1C31.6,75.2,31.6,75.4,31.4,75.4z M84.9,36.9c-0.3,0.2-0.8-0.1-1.1-0.5 c0.1,0.2,0.1,0.6,0.3,0.9c-0.5,0.2-0.2,0.6,0.2,0.7c0-0.1,0-0.3,0-0.4c0.2,0.1,0.4,0.2,0.5,0.3c0.2-0.2,0.2-0.3,0.4-0.5 C85.1,37.2,85,37,84.9,36.9z M85.1,40.6c0-0.6-0.1-2.1-0.6-2.4c-0.6-0.4,0.5,2.1-0.6,1.6c0,0.2-0.1,0.5,0,0.7 c-0.8-0.3-0.9,0.5-1.4,0.9c0.3,0.3,0.4,0.6,0.6,0.9c0.3-0.4,0.2-0.9-0.3-1.2c0.2,0,0.4-0.2,0.6-0.2c0.2,0,0.6,0.2,0.6,0.2 C84.2,41,84.5,40.7,85.1,40.6z M83.7,41c-0.4-0.1-0.7,0.2-0.3,0.6c0.2-0.4,0-0.1,0.3-0.2C83.8,41.2,83.6,41.1,83.7,41z M93.5,62.8 c0.1,0.5,0.3,0.9,0.7,0.8C94.1,63.3,93.8,63,93.5,62.8z M93,71.2c-0.1-0.1-2.5,1.6-2.9,2.1c0.8,0.5,2.9-1.2,3.1-2.1 C93,71.5,92.9,71.2,93,71.2z M95,69.9c-0.4,0.2-0.6,0-0.5-0.4c0,0.1-0.1,0.2-0.1,0.3c0.1-0.5,0.1-0.8-0.1-1.1 c-0.3,0.7,0.1,1.4-0.7,2c0.3,0.3,0.3,0.4-0.1,0.7c0.1,0,0.1,0.1,0.1,0.2C93.9,71.3,95,70.2,95,69.9z M82,50.6 c0.2-0.2,0.3-0.2,0.3-0.5c-0.1,0-0.3-0.1-0.4-0.1C81.9,50.2,81.9,50.4,82,50.6z M82.4,50.6c-0.3-0.4-0.2,0.1-0.1,0.5 c0.2-0.3,0.3-0.5,0.2-0.9C82.5,50.4,82.4,50.5,82.4,50.6z M82.8,49.7c-0.1,0-0.2,0-0.3,0c0,0.1,0.2,0.4,0.2,0.5c-0.1,0-0.1,0-0.2,0 c0.1,0.2,0.1,0.3,0.2,0.5c0.1-0.2,0.1-0.2,0-0.5c0.1,0,0.2,0.1,0.2,0.1C83,50.1,82.9,49.9,82.8,49.7z M81,51 c0.2-0.3,0.3-0.4,0.2-0.8c-0.1,0.5-0.4,0.8-0.6,1.2C80.8,51.3,80.9,51.1,81,51z M81.2,48.6c0.1,0.2,0.1,0.5,0.3,0.3 c0,0.4,0.3,0.6,0.6,0.6c0,0,0-0.1,0.1-0.1c0.1,0.2,0.2,0.3,0.4,0.4c0-0.7-0.6-0.5-0.8-1c-0.2-0.4,0.2-0.9,0-1.4 c-0.5-0.1-0.6,0.3-0.4,1c0,0-0.1-0.1-0.1-0.1C81.1,48.3,81.1,48.4,81.2,48.6z M83.3,52.2c0.1-0.5,0.1-1.1-0.3-1.4c0,0.1,0,0.2,0,0.3 c-0.4,0.2-0.9,0.1-0.9,0.8c0.7-0.7,0.4,0.2,1,0.5c0-0.2,0.1-0.5,0.1-0.7C83.2,52,83.3,52.1,83.3,52.2z M81.5,49.6 c0.1-0.1,0.3-0.1-0.2-0.3C81.4,49.4,81.5,49.5,81.5,49.6z M91.8,57.4c0.1,0.1,0,0.2,0.2,0.1c-0.1-0.2-0.2-0.5-0.3-0.7 C91.6,57,91.7,57.1,91.8,57.4z M90.2,57.3c0.4-0.1,1.1-0.5,0.6-0.9c-0.1,0.4-0.2,0.6-0.4,0.3c-0.1,0-0.5,0.2-0.5,0.3 C89.9,57.2,90,57.2,90.2,57.3z M90.9,56.1c0.1,0.2,0.2,0.3,0.2,0.5c0.1-0.5-0.2-0.8-0.6-0.8C90.7,55.9,90.8,56,90.9,56.1z M90.3,59 c-0.2-0.4-0.7-0.7-1-1.6c0.1,0,0.2,0,0.3,0c-0.7-0.7-1.4-1.7-2.5-1.8c-0.5-0.1-1,0.5-1.3,0.3c-0.5-0.2-0.1-1.4-1.2-0.8 c0.3,0.4,0.6,0.5,0.9,0.6c-0.2,0-0.3,0.1-0.5,0.1c0.1,0.2,0.2,0.4,0.3,0.5c0.1,0,0.2-0.2,0.2-0.2c0.6,0.5,2,1,1,2 c0.6-0.3,0.7,0.4,1.2,0.3c0.4-0.1,0.4-0.5,0.6-0.5C89.2,57.9,89.5,58.9,90.3,59z M93.2,58.5c-0.1,0.1-0.2-0.2-0.2,0.1 C93.3,58.8,93.2,58.6,93.2,58.5z M92.4,57.7c0,0-0.1-0.2-0.2-0.3C92.2,57.6,92.3,57.6,92.4,57.7z M92.9,58c0.1,0.1,0.1,0.1,0.2,0.2 c-0.2-0.2-0.3-0.3-0.5-0.4C92.7,57.8,92.8,57.9,92.9,58z M93.5,59.1C93.6,58.9,93.6,58.8,93.5,59.1z M93.5,58.7c0-0.2,0-0.4-0.2-0.6 C93.3,58.3,93.4,58.5,93.5,58.7z M81,45.9c0.1-0.5,0.2-1-0.1-1.3C80.6,45,80.6,45.5,81,45.9z M94.8,61c0,0,0.1-0.2,0-0.4 C94.7,60.8,94.8,61.1,94.8,61z M94.8,61.2c0.1,0.1,0,0.3,0.2,0.1C94.9,61.1,94.8,61.2,94.8,61.2z M29.5,76.3 c-0.4-0.8-0.5-0.2-0.7-0.2c0.2,0-0.3,0.2-0.3,0.2c-0.2,0-0.6-0.3-0.9-0.4c0.9,0.9,1.9,1.2,2.6,0.7C30,76.6,29.8,76.4,29.5,76.3z M89.6,64.4c0-0.2-0.2-0.3-0.1-0.7c-0.2,0-0.1-0.1-0.3,0c0.1-0.8-0.5-1.1-0.7-1.7c-0.1-0.5,0-1-0.2-1.6c-0.1,0.1-0.1,0.1-0.2,0.2 c0-0.5-0.1-1.1-0.2-1.6c-0.5,0.9-0.5,3.8-1.7,2.2c-0.3-0.5-0.4-0.2-0.4-0.8c0-0.3,0.4-0.5,0.4-0.7c0-0.1-1.1-0.4-1.4-0.5 c0.3,0.3-0.7,0.7-0.8,1.5c-0.5-0.2-0.7-0.4-1.1-0.2c-0.4,0.1-0.7,0.9-0.7,1.1c0,0-0.1,0.1-0.1,0.1c0-0.1,0-0.2-0.1-0.3 c-0.4,0.8-0.6,1.1-1.3,1.4c-0.6,0.3-1.1,0.4-1.6,1c0-0.1,0-0.2,0-0.3c-0.3,0.6-0.5,1.1-0.3,1.8c-0.1-0.1-0.1-0.2-0.2-0.3 c0,0.1,0,0.3,0,0.4c0-0.1-0.1-0.1-0.1-0.2c0.1,1,0.1,1.7,0,2.7c0,0.4-0.6,0.5,0,0.9c0.4,0.2,0.7-0.3,1-0.4c0.8-0.2,1.4-0.5,2.3-0.7 c1.4-0.5,1.7-0.2,2.1,1.1c0.2-0.3,0.5-0.6,0.8-0.8c-0.1,0.4-0.3,0.7-0.6,1c0.2-0.1,0.3-0.2,0.5-0.4c-0.1,0.2-0.1,0.3-0.2,0.5 c0.5,0.2,0.5,2.1,1.5,0.9c0,0.1-0.1,0.1-0.1,0.2C86.9,71.3,90.8,66.1,89.6,64.4z M85.9,71.3c-0.4-0.2-1,0.2-0.7,0.8 c0.2,0.6,0.9-0.4,1.1-0.9C86.2,71.2,86.1,71.2,85.9,71.3z M24.6,44.3c0-0.2,0.2-0.3-0.1-0.5C24.5,44,24.6,44.2,24.6,44.3z M24.2,44.9c0.1,0.1,0.1,0.2,0.1,0.4c0.1-0.2,0.1-0.3,0-0.6C24.1,44.6,24.3,44.8,24.2,44.9z M24.4,43.9c-0.2,0-0.3-0.1-0.3,0.2 C24.3,44.1,24.4,43.9,24.4,43.9z M36.2,56.9c-1-0.3-1.6-1.5-2.7-1.1c0-0.7-0.8-0.9-1.2-0.6c0-0.4-0.4-0.5-0.5-0.8 c-0.1-0.1-0.1-0.7-0.2-1c-0.3-0.7-0.6-0.8-1.2-1.1c-0.6-0.3-0.6-0.2-1.1-0.8c-0.3-0.4-0.6-0.7-1-1c0.1,0,0.2-0.1,0.3-0.1 c-0.9-0.2-1.7,0.6-2.3-0.6c-0.4,0.3-0.4,0.8-0.6,1.2c0-0.3,0-0.7,0-0.9c0.4-0.6-0.1-0.2-0.5,0.1c-0.3,0.2-0.7,0.9-1,1 c0,0-1.6-0.3-1.6-0.3c-0.8-0.7,0.1-1.4-0.1-2.2c-0.2-0.8-1.1-0.3-1.6-0.5c0.2-0.3,0.3-0.7,0.3-1.1c0.1,0,0.1,0,0.1,0.1 c0.2-1.2,0.5-1.7-0.7-0.8c-0.6,0.5-1.3,1.5-1.8,0c-0.3-0.8,0-2.4,0.4-3.1c0.7-1.1,1.6-0.5,2.3-0.6c-0.1-0.7,1.4-0.4,1.6-0.3 c0.2,0.3,0.2,2.8,0.8,1.6c0.5-1-0.4-1.7,0.5-2.7c0.6-0.7,2-1.1,1.3-2.2c0.1,0,0.1,0,0.2,0.1c0-0.2,0-0.3,0.1-0.4 c0,0.4,0,0.4-0.1,0.8c0.3-0.4,0.3-0.4,0.3-0.9c0.1,0.1,0.1,0.1,0.1,0.2c0.2-0.3,0.4-0.5,0.4-0.7c0,0,0.4-0.1,0.6-0.1 c-0.1,0-0.3,0-0.5,0c0.4-0.2,0.8-0.2,1.1-0.4c-0.1,0,0,0-0.2,0c-0.1-0.9,1.4-1.5,1.9-1.4c-0.5,0.2-0.4,0.3-0.6,0.7 c0.5-0.1,1.4-0.5,1.9-0.9c0-0.1-0.1-0.3-0.1-0.4c-0.6,1.2-1.7-0.1-0.8-0.7c-0.7-0.6-1.3,0.5-2,0.8c0.5-0.5,1.1-1.2,1.7-1.3 c0.8-0.2,1.5,0.2,2.2-0.4c1.2-0.9,0.1-1.1-0.6-1.9c0.2-0.5-0.1-0.9-0.2-1.5c-0.5,0.5-1.8,1-1.1-0.3c-0.5,0-0.6-0.4-1.2-0.4 c-1,0-0.4,0.7-1.2,1.3c0.6,0.8-0.3,1.4-0.9,1.5c0.6,1.6-1.5,1.4-0.5-0.2c-0.8,0-1.4-1-2.2-0.7c0-0.6,0.1-0.4-0.3-0.7 c0.5-1.3,2.5-2.2,3.5-2.7c0.3-0.1,1.4-0.2,1.3-0.9c-0.2-1-1.3,0.4-1.7,0.6c0.1-0.2,0-0.2,0.1-0.5c-0.2,0-0.2-0.2-0.6,0 c0.1-0.1,0.1-0.2,0.2-0.3c-0.1,0-0.2,0-0.4-0.1c0.7-0.6-0.4-1-0.8-0.1c0.5,0.5-0.1,0.7-0.5,1c0.1-0.1,0.1-0.2,0.2-0.3 c-0.5-0.2-1,0.1-1.6,0c-0.4-0.1-0.7-0.4-1.2-0.1c0,0,0.1,0.1,0.1,0.1c-0.4,0.1-1.1,0.1-1.7,0c0.1-0.1,0.3-0.1,0.4-0.2 c-0.6-0.3-1.5-0.7-2.1-0.3c0.1-0.1,0.1-0.2,0.2-0.3c-0.4,0.3-0.9,0-1.4,0c-0.6,0.1-1.2,0.4-1.8,0.4c-0.6,0-2.5-0.4-2.7-0.6 c-1.3-0.2-2.7,0.3-4,0.8c0.3,0.2,0.3,0.4,0.4,0.8c-0.2,0-0.3,0-0.5,0c0.1-0.1,0.1-0.1,0.2-0.2c-0.4,0-0.9,0.2-1.3,0.3 c0.2,0.7,0.9,0.5,1.4,0.3c-0.3,0.5-0.9,0.4-1.5,0.6c-0.5,0.2-1.4,1.3-0.4,1.1c-0.1,0.1-0.1,0.3-0.3,0.5c0.2-0.1,0.3-0.1,0.5-0.1 c0,0.1,0,0.1-0.1,0.2c0.1,0,0.1-0.1,0.2-0.1c0,0.1,0,0.1,0,0.2c0.2-0.1,0.4-0.1,0.6-0.2c-1,0.9-2.2,1-3.2,1.7 c2.1-0.4,3.5-1.8,5.4-2.6c-0.3,0.1-0.7,0.4-0.8,0.8c0.8-0.2,1.2-0.4,1.9-0.4c0.8,0.1,1.3,0.9,2.1,0.8c-0.1,0.6-0.1,1.8,0.3,2.2 c-0.6,0.8,1.3,1,0.4,2c-0.2-1.2-0.9,1-1.2,1.6c-0.4,0.8-0.5,2-0.2,2.8c0.2,0.4,1.7,3,0.9,3.3c0.6,0.7,0.6,1.2,1,2 c0.6-0.7-1.1-2.5-0.6-3.6c0.4,0.2,0.8,1.8,1,2.3c0.2,0.4,0.6,1.1,0.8,1.6c0.1,0.7-0.2,0.6,0.2,1.3c0.2,0.4,0.9,0.7,1.3,0.9 c0.5,0.3,1,0.1,1.3,0.2c0.8,0.3,1.4,1.1,2.1,1.3c0,0-0.1,0-0.1,0c0.4,0.5,0.5,0.9,0.7,1.3c0.1-0.1,0.1-0.1,0.1-0.2 c0.4,0.6,0.9,1.2,1.4,1c-0.1-0.8,0.3-0.4,0.5-0.1c0.3,0.5,0.3,1.3,0.2,1.7c-0.2,0.7-1.6,1.6-0.9,2.5c0-0.1,0.1-0.1,0.1-0.2 c0,0.6-0.4,0.8-0.3,1.5c0.1,0.3,0.7,1.2,0.9,1.6c0.3,0.7,0.5,1.6,1,2.1c0.5,0.6,1.3,0.7,1.6,1.4c0.3,0.7,0.2,2,0.2,2.8 c0,1,0.2,1.8,0.2,2.7c0.1,1.2-0.5,3.5,0.3,4.4c0-0.2,0-0.3,0-0.5c0.3,0.3,0.2,0.4,0.3,0.9c-0.1,0-0.2-0.1-0.3-0.1c0,0.5,0,0.6-0.1,1 c0.1,0,0.3,0.1,0.4,0.1c-0.8,1.1,0.7,2.6,1.6,2.7c-0.1-0.5,0.1-0.6,0.6-0.6c-0.6-0.4-0.2-0.6-0.2-1c0-0.2,0.3-0.7,0.3-0.7 c0-0.2-0.3-0.5-0.3-0.4c0-0.1-0.3-0.3-0.3-0.6c0-0.2,0.4-0.2,0.4-0.2c0.1-0.5-0.2-0.7,0.3-1c0-0.1-0.1-0.1-0.1-0.2 c-0.8,0,0-0.5,0-0.4c0.1-0.3,0.5-0.3,0.1-0.9c1.8,0.4,1.2-1.1,0.8-2c1,0.9,1.4,0,1.9-1c0.6-1.3,0.3-2.4,1.5-3.2 c0.7-0.5,0.7-0.1,1.1-1c0.3-0.8,0.3-1.4,0.4-2.2C35.4,59.7,36.6,58.3,36.2,56.9z M24.2,26.2c-0.2,0-0.3-0.1-0.5,0 C23.9,26.6,23.9,26.3,24.2,26.2z M22.4,25.3c-0.2,0.1-0.4,0.2-0.5,0.3c0.4,0.1,0.8,0,1.2,0c-0.2,0-0.4,0.2-0.6,0.2 c0.5,0,1.7,0,2-0.5c-0.2,0-0.3,0-0.4,0c0-0.1,0-0.2,0.1-0.3c-0.4,0.1-0.3-0.1-0.4,0.4C23.3,25.5,22.8,25.2,22.4,25.3z M24.2,27.3 c-0.5-0.1-0.6-1.9-1.2-0.5c0-0.6-0.7-0.4-1.2-0.3c0.1-0.1,0.1-0.1,0.2-0.2c-0.5-0.1-1.1,0.2-1.5,0.5c0.2,0,0.4,0.1,0.7,0.1 c-0.2,0-0.4,0.1-0.6,0.1c0.3,0.2,0.8,0.1,1.2,0.2c-0.4,0-0.8,0.1-1.2,0.1C21.2,28.1,23.6,27.9,24.2,27.3z M24,24.9 c0-0.3-0.3-0.1-0.7,0C23.6,25,23.8,24.9,24,24.9z M21.6,25.4c0.4-0.1,0.9-0.1,1.2-0.5c-0.6,0-1.2,0.2-1.8,0.5 C21.2,25.4,21.4,25.4,21.6,25.4z M32.4,34.8c-0.1,0-0.2,0.2-0.3,0c0,0,0.1-0.1,0.1-0.1c-0.1,0-0.3,0-0.4,0c0.2-0.2,0.3-0.5,0.5-0.7 c-0.6,0.1-1.2,1.1-1.3,1.6c0.3,0,0.7,0,1,0.1c-0.1,0.1-0.1,0.1-0.2,0.2c0.1-0.1,0.4-0.2,0.5-0.3c0,0.1,0,0.2-0.1,0.4 c0.4,0,0.5-0.3,0.4-0.7c-0.1,0-0.1,0-0.2,0.1c0-0.1,0.1-0.2,0.1-0.3C32.6,34.9,32.5,34.9,32.4,34.8z M14,35c0.7,0.6,0.5-0.1,0.2-0.5 C13.7,34.1,13.5,34.6,14,35z M19.6,27.1c0.8-0.1,1.5-0.7,2.3-0.8c-0.9-0.9-1.9,0-2.6,0.5C19.5,26.8,19.5,27,19.6,27.1z M27.7,29.4 c-0.8-0.6-0.7-0.5-1.6,0.2c0.1,0,0.4,0.2,0.3,0.2C27,29.4,27.6,29.7,27.7,29.4z M13.3,33.1c-0.2,0.2-0.3,0.4,0,0.7 c0.1-0.2,0.2-0.5,0.3-0.7C13.4,33.1,13.4,33.1,13.3,33.1z M27.5,30.1c0.1,0,0.1,0.3,0.2-0.1C27.6,30,27.6,30.1,27.5,30.1z M29.8,36 c-0.1,0,0-0.3-0.2-0.1c0.3,0.2,0.2,0.2,0.6,0.1C30.1,36.1,29.9,36.1,29.8,36z M26.7,30c0.2,0,0.3,0.1,0.6-0.2 C27,29.8,26.9,29.9,26.7,30z M30.5,35c-0.2-0.2-0.3-0.3-0.6-0.3C30.1,34.9,30.3,34.9,30.5,35z M27,25.3c0,0.2,0.1,0.2,0,0.5 c0.7,0.2,2.2,0.4,2.7-0.2c-0.7-0.3-1.4,0.1-2.1-0.2c0,0,0.1-0.1,0.1-0.1c-0.4-0.2-0.8-0.3-1.3-0.1C26.7,25.3,26.8,25.3,27,25.3z M26.8,24.9c0.2,0,0.3,0,0.5,0C27.2,24.8,26.9,24.9,26.8,24.9z M27.5,24.4c0.1,0,0.2,0,0.4,0c-0.1,0.1-0.2,0.1-0.3,0.2 c0.6,0.4,1.2,0,1.8-0.2c-0.5-0.6-1.3-0.6-2-0.2C27.3,24.4,27.4,24.2,27.5,24.4z M26.3,25.8c0.2,0,0.3,0.1,0.5-0.1 C26.6,25.6,26.1,25.4,26.3,25.8z M27,24.8c-0.1-0.2-0.1-0.3-0.5,0C26.8,24.9,26.8,24.7,27,24.8z M29.7,26.4c0.1,0,0.3,0,0.5,0 c-0.2-0.3-0.6-0.4-0.9-0.2C29.4,26.5,29.4,26.4,29.7,26.4z M26.9,26c-0.5-0.1-0.9,0.1-1,0.7c0.5-0.1,1-0.3,1.4-0.6 C27.1,26.1,27,26,26.9,26z M31.5,27.3c-0.4-0.3-0.7-0.5-1.2-0.4c-0.2-0.6-0.9-0.4-1.3-0.2c0.3-0.8-0.6-0.5-1-0.2 c0-0.1,0-0.1-0.1-0.2c0.1-0.1,0.2-0.1,0.3-0.2c-0.6,0-1.1,0.2-1.4,0.8c0.1,0,0.2,0,0.3,0C27.1,27,27,27,26.9,27.1 c0.6,0.3,2.7,0.1,2.5,0.6c0.8,0.1,0.7,0.4,0.2,0.9c-0.3,0.3-0.9,0.1-1.3,0.6c0.5,0.2,0.9-0.2,1.4,0.3c0,0-0.1,0.1-0.1,0.1 c0.4,0.3,0.8,0.5,1.2,0.5c-0.1-0.2-0.2-0.5-0.4-0.7c1.4,1.5,0.5-0.9,0.4-0.7c0.3-0.6,0.9,0.8,1.6-0.4c-0.5-0.1-0.8-0.5-1.3-0.6 c0.2-0.1,0.3-0.1,0.5-0.2C31.6,27.5,31.5,27.4,31.5,27.3z M25.7,24.7c0.2,0.1,0.4,0.1,0.6,0.1c-0.1-0.4-0.5-0.5-0.9-0.3 c0.1,0,0.1,0,0.2,0.1c-0.1,0-0.2,0.1-0.3,0.1C25.4,24.7,25.5,24.7,25.7,24.7z M29,24c0.5,0.1,0.9,0.1,1.4,0.1 c-0.3,0.1-0.7,0.1-1,0.1c0.1,0.2,0,0.1,0.2,0.3c-0.2,0.1-0.5,0.2-0.8,0.3c0.2,0.1,0.3,0.2,0.4,0.3c-0.4-0.2-0.8,0-1.1,0.3 c0.7,0.1,1.9,0.3,2.5-0.2c-0.1,0-0.2,0-0.4,0c0.4-0.3,1-0.4,1.2-0.7c-0.1,0-0.2,0-0.3,0c0.9,0,1.8-0.4,2.7-0.6c-0.1,0-0.3,0-0.4,0 c0.4-0.1,0.9-0.1,1.3-0.3c-1.6-0.4-4.4-0.4-5.9,0.3C28.9,23.8,28.9,23.9,29,24z M29.5,28.2c-0.2-0.3-0.3-0.3-0.5,0.2 C29.3,28.4,29.4,28.3,29.5,28.2z M24.4,24.6c-0.2,0-0.4-0.1-0.6,0.1C24,24.7,24.2,24.6,24.4,24.6z M25,27.4c-0.2,0-0.4,0-0.7,0.2 c0.3,0.2,0.6,0.2,0.9,0.1C25.2,27.4,25.1,27.5,25,27.4z M24.4,26.5c0.4,0.5,0.9,0.5,1.3,0c-0.1,0-0.2-0.1-0.2-0.1 c0.2-0.1,0.2-0.1,0.3-0.3c-0.4,0-0.9-0.1-0.9,0.3C24.7,26.4,24.6,26.5,24.4,26.5z M25.3,25.7c0.4,0.2,0.9-0.1,0.9-0.5 c-0.4,0-0.8,0-1.1,0.4C25.5,25.4,25.3,25.7,25.3,25.7z M78.1,46.7c-0.7,0.3-0.2,0.9,0,0.7C78.4,47,78.4,46.8,78.1,46.7z M24.7,46.8 c0.2,0,0.3,0,0.4-0.2c-0.8-0.5-2-1.9-3-0.7c0.3-0.1,0.6-0.2,0.9-0.3c0,0-0.1,0.1-0.1,0.1c0.6,0.3,1,0.3,1.4,0.8 c-0.1,0.1-0.1,0.2-0.2,0.2C24.3,46.7,24.5,46.8,24.7,46.8z M55.7,40.5c-0.1,0.1-0.2,0.1-0.4,0.1c0.4,0.2,0.3,0.1,0.6-0.2 C55.9,40.4,55.8,40.4,55.7,40.5z M49.5,32.8c0.1-0.4,0.2-0.6-0.3-0.4C49.2,32.7,49.3,32.7,49.5,32.8z M48.9,38.1 c0-0.3,0.1-0.4,0-0.7C48.6,37.7,48.8,37.8,48.9,38.1z M45.1,32.6c0.1-0.1,0.1-0.3,0.2-0.1c0,0.1,0.4,0.4,0.4,0.6 c0,0.4-0.6-0.1-0.3,0.6c-0.1,0-0.2,0.1-0.3,0.1c0.1,0,0.3,0.2,0.5,0.2c-0.2,0.1-0.4,0.3-0.6,0.5c0.7,0,1.9,0,1.9-1 c-0.6-0.2-0.6-1-1.2-1.2c0.2-0.2,0.2-0.5,0.3-0.6c-0.2,0-0.3,0-0.5,0c0.1-0.1,0.2-0.3,0.3-0.4C45,31.2,44.9,32,45.1,32.6z M53.3,40.5c-0.2,0-0.2,0.1-0.4-0.1c0,0.1,0,0.1,0,0.2c0.3,0.1,0.5,0.2,0.8,0C53.5,40.5,53.5,40.5,53.3,40.5z M41.5,27.3 c-0.3,0-0.6,0-0.9,0c0-0.1,0.2-0.4,0.2-0.4c0.3,0.3,0.4,0.3,0.8,0.3c-0.2-0.3-0.2-0.4-0.6-0.6c0.1,0,0.3,0,0.5,0 c-0.1-0.1,0-0.2-0.2-0.4c0.3,0,0.5-0.1,0.7-0.2C42,26,42,26,41.9,26c0.2,0,0.3,0,0.5,0c-0.1-0.1-0.2-0.2-0.2-0.3 c0.3-0.2,0.3-0.2-0.1-0.5c0.2,0,0.5-0.1,0.7-0.1c-0.3-0.4-0.2-0.7,0.3-0.9c-0.2,0-0.3,0-0.5,0c0.5,0,1-0.2,1.6-0.3 c-0.6-0.3-1.5-0.1-2.1,0c0.1-0.1,0.2-0.1,0.2-0.2c-0.6-0.1-1.3-0.1-1.9-0.1c0.7,0,1.5,0.1,2.2-0.1c-1.4-0.2-3.8-0.7-5,0.1 c0.1,0,0.3,0.1,0.4,0.1c-1.6-0.3-3.3-0.2-4.8,0.4c0.2,0,0.3,0.1,0.5,0.1c-0.6,0.3-1.4,0.1-1.9,0.5c0.4,0.1,0.8,0.2,1.2,0.2 c-0.3,0-0.7,0-1,0.1c0.2,0.2,4.1,0.7,2.5,1.7c0.3,0.1,0.5,0.2,0.8,0.4c-0.9-0.5-1,0.9,0,0.2c-0.6,1-1.2,0.7-0.8,2.1 c0.2,0.7,0.5,0.9,0.9,1.1c0.7,0.4,0.6,0.2,1.1-0.4c0.1-0.1,0.4-0.9,0.6-1.1c0.4-0.3,0.8-0.2,1.1-0.4C39.3,28.2,40.4,27.9,41.5,27.3z M25.3,47.4c0.3,0.1,0.4-0.1,0.6,0.3c0.2-0.4,0.6-0.3,0.9-0.4c-0.3-0.4-0.9-0.7-1.4-0.4c0.2,0.2,0.1,0.2,0.3,0.4 c-0.2,0-0.3,0.1-0.6,0C25,47.6,25.1,47.4,25.3,47.4z M80.8,58.3c0.1,0,0.2-0.1,0.3-0.1C81,58,80.7,58,80.5,58.4 C80.6,58.4,80.7,58.3,80.8,58.3z M82.5,56.6c-0.2-0.4-0.3-0.7-0.5-1.1c0.2-0.1,0.3-0.3,0.5-0.3c0-0.1,0-0.1,0-0.2 c-0.4,0.2-1.4,0.1-0.8-0.4c0.5-0.4,1.2,0.5,1.3-0.5c-0.4,0.6-0.9,0-1.3,0.2c-0.3,0.2-0.5,1.1-0.5,1.5c0,0,0.3,1.2,0.2,1.2 c0.4,0.2,0.2-0.9,0.4-1.2c0,0.4,0.1,0.6,0.2,0.9c0.1-0.1,0.2-0.1,0.3-0.2c-0.1,0.3,0,0.3,0,0.5C82.5,56.9,82.4,56.8,82.5,56.6z M78.5,55.3c0.1,0.8,1.5,1.1,1.9,1.1c0.1-0.7,0.3-1.8,0.9-2c-0.6-0.8-0.4-1.3,0-1.8c-0.4-0.2-0.5-0.6-0.8-0.5 c-0.3,0.1-0.6,0.9-0.8,1.1C79.1,53.9,77.9,54,78.5,55.3z M85.8,57.1c-0.1,0.1-0.2,0-0.2,0.5C85.8,57.4,85.7,57.2,85.8,57.1z M83.6,56c-0.1,0-0.2,0-0.3,0C83.6,56.5,83.5,56.1,83.6,56z M81.6,58.9c-0.1-0.2-0.1-0.4-0.5-0.3C81.3,58.8,81.4,58.8,81.6,58.9z M82.3,58.2c-0.1-0.2-0.5-0.1-0.8,0.1C81.7,58.4,82,58.3,82.3,58.2z M78.7,58c0.5,0.1,1,0.2,1.5,0.1c-0.6-0.3-2.6-1.5-3-0.6 C77.7,57.7,78.2,57.8,78.7,58z M77.4,56.5c0.3-1-2-4.1-3.1-3.9c0.4,0.9,1,1.6,1.5,2.5C76,55.4,77.5,58.3,77.4,56.5z M84.2,56.1 c0.2,0.1,0.3,0,0.5,0.2c-0.2-0.5-0.6-0.6-0.9-0.2C84,56.1,84.1,56.1,84.2,56.1z M83.9,55.1c0.1-0.4,0.3-0.8-0.1-1.2 C83.7,54.3,83.7,54.7,83.9,55.1z M82.7,58.8c0.2-0.3,0.6-0.5,0.9-0.7c-0.5,0-1,0.2-1.2,0.8C82.5,58.9,82.6,58.9,82.7,58.8z M44.1,33.6c-0.1,0.1-0.1,0.3-0.2,0.4c0.4,0.1,1.4-0.5,1.1-1C44.7,32.3,44,33,44.1,33.6z M41.8,29.6c0.5,0.1,1.1-0.1,1.5-0.5 c0-0.1-0.2-0.4-0.2-0.5c-0.6,0.1-1.9-0.2-2.3,0.3c0.2,0,0.3,0.1,0.5,0.1c-0.1,0-0.2,0.1-0.4,0.2c0.2,0.1,0.3,0.1,0.5,0.2 c-0.1,0.1-0.2,0.1-0.2,0.2C41.4,29.5,41.6,29.5,41.8,29.6z M48.7,38.5C48.8,40.2,49,37.2,48.7,38.5z M50.5,39.4 c-0.2,0-0.4,0.1-0.6,0c0.1,0.3,0.4,0.5,0.7,0.6C50.7,39.5,50.6,39.5,50.5,39.4z M24.1,47.3c-0.1,0.1-0.2-0.1-0.2,0.1 c0.3,0.2,0.3,0.2,0.6,0.1C24.4,47.3,24.3,47.4,24.1,47.3z M70,51c-0.1-0.1-0.1-0.1-0.2-0.2C69.3,52.7,70.9,52.3,70,51z M61,60.2 c0-0.2-0.1-0.4-0.2-0.6c-0.1,0.3-0.3,0.5-0.4,0.7c-0.1,0.8-0.9,0.8-1.1,1.4c-0.2,0.4,0.1,0.7,0,1.1c-0.1,0.4-0.3,0.6-0.4,1 c-0.1,1.2,0.5,1.5,1.1,0.7c0.5-0.7,0.9-2.6,0.9-3.5c0,0.1,0.1,0.2,0.1,0.2C61.1,60.9,61,60.6,61,60.2z M74.3,48.1 c-0.9,0.8-1-2.4-2-2.6c0,0.2,0,0.2,0,0.4c-0.3-0.1-0.5,0-0.9,0.1c0.1,0.9-1.3,1.5-1.5,2.2c-0.2,0.6-0.2,2.1-0.3,2.7 c-0.1,0.1-0.3,0.4-0.5,0.5c-1-1.2-1.5-3.8-1.8-5.4c-0.6,0.6-1.1-0.6-1.6-1c-0.5-0.5-0.4-0.4-1.1-0.5c-0.5-0.1-0.9,0.1-1.3-0.1 c-0.4-0.2-0.5-0.6-0.8-0.7c-0.3-0.1-0.5,0.2-1,0c-0.7-0.3-0.8-1.5-1.5-1.1c0.1,0.9,0.8,1.3,1,2.1c0-0.2,0.1-0.4,0.1-0.5 c0.1,1.3,1,0.8,1.4-0.1c-0.1,0.9,0.5,0.7,0.8,1.1c0.4,0.8,0.2,0.6-0.1,1.2c-0.4,1-0.6,1.2-1.5,1.7c-0.6,0.4-2,1.9-2.6,1.1 c-0.3-0.4-0.1-0.9-0.2-1.3c-0.2-0.5-0.7-1-0.9-1.4c-0.4-0.8-1.8-3-1.6-3.7c0,0.3-0.2,0.5-0.2,0.7c-0.2-0.3-0.4-0.5-0.5-0.9 c0.1,0.8,0.6,1.5,0.9,2.2c0.3,0.7,0.4,1.4,0.7,2.1c0.3,0.7,2,2.5,1.7,3c0.5,0.9,1.8,0.2,2.4-0.1c0.1,3.4-3.7,4.9-3.4,7.8 c0.1,1.4,0.7,2.7-0.3,3.9c-0.7,0.8-1,0.7-1.1,1.7c0,0.5,0.2,0.8-0.1,1.3c-0.1,0.2-0.6,0.3-0.7,0.5c0,0.1,0,0.5-0.1,0.7 c-0.2,0.5-0.5,1.1-0.9,1.5c-0.5,0.6-0.9,0.8-1.4,1c-0.2,0.1-1.4,0.4-1.5,0.4c-0.6-0.2-0.2-0.7-0.3-1.2c-0.2-0.8-0.6-1.4-0.8-2.2 c-0.2-0.9-0.2-1.6-0.5-2.5c-0.3-0.8-0.5-1.3-0.2-2.2c0.3-1.4,0.5-2.2,0.1-3.5c-0.3-1-0.9-1.5-0.9-2.5c0-0.8,0.3-1.3-0.2-1.9 c-0.9,0.6-1.1-0.8-2.2-0.5c-0.7,0.2-1.9,0.8-2.6,0.6c-1.5-0.3-2.2-3.1-2.8-4.2c0.8-0.8,0.2-2.2,0.4-3c0.1-0.4,0.4-1.2,0.6-1.5 c0.4-0.6,0.9-0.7,1.2-1.3c0.5-0.8,0.3-1.3,1-2c0.8-0.9,0.3-0.3,1.4-0.5c0.9-0.1,2.7-1.4,3.4-0.6c0.1,0,0.2-0.1,0.2-0.1 c-0.2,0.8-0.3,1.2,0.3,1.7c0.5,0.4,1.7,1.1,2.2,0.8c0.1,0,0-0.6,0.5-0.7c0.2-0.1,0.7,0.4,0.9,0.5c0.5,0.2,1.7-0.1,1.9,0.3 c0.9,0.2,1-1.5,1-2.3c-0.6,0-1.4,0.3-1.9,0.1c-1.2-0.5-0.9-1.5,0-1.9c0.4-0.2,1.1-0.3,1.6-0.3c0.4,0,1,0.7,1.4,0.3 c0.6-0.6-0.9-1.3-1.3-1.6c0.3-0.4,0.2-0.2,0.2-0.5c0.1-0.1,0.2-0.1,0.4-0.2c-0.4-0.1-1.6,0.5-0.6,0.6c-0.4,0.4-0.8,0.5-1.1,0.1 c0.1-0.1,0.2-0.1,0.3-0.2c-1-0.9-1.9,1.4-1,1.8c-0.2,0.1-0.5,0.3-0.7,0.5c-0.2-0.4-0.3-0.3-0.7-0.2c0.1,0.1,0.1,0.1,0.2,0.2 c-0.3-0.1-0.2,0.1-0.4-0.1c0,0.5,0.2,0.7,0.4,1.1c-0.1,0-0.2-0.1-0.3-0.1c0.1,0.2,0.1,0.2-0.1,0.2c0,0.1,0.1,0.2,0.1,0.4 C52,40,52,38.4,51.7,37.9c-0.3-0.5-1.4-1.3-1.6-1.2c-0.1-0.2,0-0.2,0-0.3c-1.3,0,1.2,2,1.3,2.3c-0.7-0.5-0.1,0.3-0.7,0.8 c0.3-1-0.8-1.3-1.3-1.8c-0.6-0.6-0.2-0.5-0.9-0.6c-0.5-0.1-1.1,0.5-1.3,0.7c-0.8,0.6-0.7,1.7-1.5,2.2c-0.8,0.5-1.1-0.4-1.8-0.1 c-0.1-0.5-0.2-2.3,0.1-2.6c0.4-0.5,1.5,0.4,1.9-0.1c0.7-0.8-0.5-1.5-0.8-2c0.3,0,0.5-0.1,0.8,0c0-0.1-0.1-0.3-0.1-0.4 c0.5,0.3,0.9-0.3,1.2-0.6c0.3-0.3,0.8-0.7,1-0.9c0.1-0.2,0.3,0.2,0.4-0.1c0,0-0.1-0.3-0.1-0.4c0.2-0.4-0.2-0.8,0.5-1 c0,0.1,0.1,0.4,0.1,0.5c-1.1,0.9,1.1,0.8,1.5,0.7c0.6-0.1,0.7,0.1,1.1-0.3c0.2-0.2-0.2-1.4,0.7-0.6c0-0.2,0-0.3,0-0.5 c-0.2-0.1-0.1-0.1-0.3-0.3c0.5-0.2,0.9,0,1.3-0.3c-0.6-0.4-1.5,0.5-1.9-0.3c-0.4-0.7,0.2-1.2,0.8-1.5c-0.5-0.8-0.9,0.1-1.2,0.5 c-0.7,0.9-0.3,0.8-0.4,1.8c0,0.2-0.6,1.4-0.9,1.3c-0.4-0.1-0.7-1.2-1-1.4c-0.3-0.1-1.5,0.8-1.2-0.8c0.1-0.6,1.1-1,1.6-1.5 c1-1.1,2.6-2.5,4.1-1.6c-0.1,0-0.2,0.1-0.3,0.1c0.4,0.2,2.3,0.3,2.6,0.9c0.4,1-1.2,0.3-1.6,0.4c0.5,0.3,0.5,0.9,1.1,1 c-0.1-0.1-0.1-0.2-0.2-0.3c0.2,0,0.6,0,0.9,0c-0.1-0.1-0.1-0.2-0.2-0.3c0.3-0.3,0.6-0.4,0.9-0.2c0-0.3-0.1-0.6-0.3-0.9 c0.4,0,0.6,0.1,0.8,0.3c-0.1,0-0.2,0-0.3,0c0.4,0.6,1.1-0.3,1.9-0.4c-0.1,0.1-0.1,0.1-0.2,0.2c0.5,0,1.2-0.1,1.6-0.3 c-0.1-0.1-0.2-0.1-0.3-0.2c0.6-0.2,1.5,0.2,2.1,0.5c0-0.1,0.1-0.1,0.1-0.2c-0.7-0.3-1.2-1.5-0.2-1.4c0.5,0,1.4,1.7,1,2.2 c0.4,0,0.5-0.1,0.6-0.5c-0.4-0.4-0.6-0.8-1-1.2c0.1-0.1,0.2-0.1,0.3-0.2c-0.1-0.1-0.1-0.2-0.2-0.2c0.2,0.2,0.4,0.4,0.6,0.6 c-0.1-0.1-0.1-0.2-0.2-0.2c0.4-0.2,0.8-0.2,1.2,0c-0.3-0.2-0.3-0.4-0.5-0.6c0.4-0.1,0.9-0.1,1.3-0.1c-0.1-0.1-0.2-0.1-0.3-0.2 c0.6-0.7,1.8-0.5,2.7-0.6c0.1-0.4,0.5-0.5,0.9-0.3C68.1,25,68,25,67.9,25c0.7,0.2,1.8-0.1,2.3,0.6c-0.2,0.1-0.5,0.3-0.7,0.4 c1.1,0.1,2.1,0.5,3.2,0.4c-0.1-0.1-0.1-0.2-0.2-0.2c1.1,0,1.5,0.7,2.5,1c0-0.1-0.1-0.2-0.1-0.4c0.6,0.2,1.2,0.1,1.8,0.1 c-0.1-0.1-0.3-0.2-0.4-0.3c0.5-0.3,1.7-0.1,2.3,0.1c0.7,0.2,1.4,0.2,2.1,0.4c1.1,0.2,2.5,0.9,3.6,0.7c-0.2-0.1-0.3-0.2-0.5-0.4 c1.8,0.3,2.5,0.3,3.9,1.8c-0.2,0-0.2,0.1-0.5,0.1c0.4,0.2,0.9,0.4,1.2,0.8c-0.6-0.2-1.3,0.2-1.3,0.9c-0.5-0.4-1.1,0-1.6,0 c0,0.9,0.6,0.7,1,1.4c-0.1,0-0.1,0-0.2,0c0.1,0.2,0.2,0.3,0.3,0.5c-0.1,0.1-0.2,0.1-0.3,0.2c0.1,0.1,0.1,0.3,0.2,0.4 c-0.1,0-0.2,0.1-0.3,0.1c0.2,0.4,0,0.4,0,0.7c-0.7-0.7-1.6-1.6-1.8-2.6c0.5-0.2,1-1.7,0.2-1.7c0.2,1-0.4,0.2-0.7,0.3 c-0.4,0.2-1.1,0.3-0.3,0.9c-0.6,0.3-1.3-0.1-2,0c-1.2,0.1-1.2,0.4-1.8,1.7c1.2,0.2,2.2,0.4,2.5,2.1c0.1,0.6,0.1,1.6-0.2,2.1 c-0.4,0.5-0.6,0.3-0.9,0.6c0,0-0.4,0.9-0.4,0.9c0.1,0.5,0.3,0.4,0.6,0.9c1.1,1.9-0.9,1.2-0.5,0.3c-0.2-0.2-0.7-0.8-0.7-0.8 c-0.4-0.2-0.5-0.6-1.1,0c0.4-1.3-0.9-0.4-0.9,0c0,0.9,1.3,0.4,1.6,0.8c-1.4,0.4,0.5,2.1,0.6,2.8c0.2,1.5-0.7,2.5-1.6,3.1 c-0.3,0.2-0.4,0.3-0.8,0.4c-0.1,0,0.1,0.4-0.1,0.4c-0.1,0-0.2-0.3-0.2-0.3c-0.1,0-1-0.5-1,0.7c0,0.8,1.1,1.3,1.3,2.1 c0.2,1.1-0.4,1.4-1,2.1c0-0.5-0.9-1.6-1.4-1.6c0-0.1,0-0.2,0-0.3c-0.1,0-0.2,0-0.3,0c0,0.6-0.1,1.2,0,1.7c0.1,0.4,0.5,0.7,0.7,1.1 c0.4,0.8,0.5,1.3,0.8,2.1c-1.2-0.2-1.1-2-1.8-2.8c0,0.1,0,0.2,0,0.2C75.1,51,75,47.7,74.3,48.1z M53.6,51.4 c-0.1-0.1-0.1-0.1-0.2-0.2C53.5,51.3,53.5,51.4,53.6,51.4z M61.2,39.7c-0.1-0.7-0.4-0.9-0.5-1.5c0.3,0.1,0.3,0,0.5,0 c-0.2-0.4-0.5-0.6-0.5-0.1c-0.1-0.7-0.6-0.8-0.9-1.4c0.1,0,0.2,0,0.3,0c0.2-0.4-0.1-0.3,0.4-0.3c0.1-1-1-0.7-1.3-0.2 C58.7,37,59.4,38,60,38.5C59.1,39.1,60.4,40.4,61.2,39.7z M50.4,24.2c0.4,0.2,1,0.2,1.5-0.1c-0.6-0.2-1.4-0.2-2-0.1 C50.1,24.2,50.2,24.2,50.4,24.2z M51,25c0.1,0,0.3-0.1,0.4-0.1c-0.3-0.1-0.5-0.1-0.8-0.1c0.1,0.3,0.1-0.1,0,0.2 C50.8,24.9,50.9,24.9,51,25z M49.1,24.8c0.1,0,0.2,0.1,0.3,0.1c-0.1,0-0.1,0.1-0.2,0.1c0.7,0.5,0.8-0.4,1.5-0.5 c-0.9-0.3-1.4-0.2-2.2-0.2C48.7,24.5,48.9,24.7,49.1,24.8z M27.1,47.3c0.1,0.1,0,0.4,0.4,0.1C27.4,47.3,27.3,47.3,27.1,47.3z M55.6,24.1c0.3,0.1,0.6,0,0.9-0.1c-0.5,0-0.8,0-1.3,0C55.5,24,55.7,24.2,55.6,24.1z M57.7,26.9c0.4,0.2,0.9,0.4,1.4,0.3 c-2-0.4,1.3-1.7,1.6-1.9c-0.7-0.3-1.8,0.1-2.5,0.5c-0.1,0.2,0,0.1-0.3,0.4c0.1,0,0.1,0,0.2,0C57.7,26.4,57.7,26.6,57.7,26.9z M65.1,24.4c0.5,0.1,1,0.2,1.5,0.2c-0.4-0.6-1.5-0.9-2.1-0.4C64.7,24.1,64.8,24.3,65.1,24.4z M75.7,25.8c0.3-0.1,0.7-0.1,1.1-0.1 c-0.3-0.5-1.3-0.5-1.8-0.4C75.2,25.7,75.4,25.8,75.7,25.8z M67.6,24.6c-0.5-0.2-0.9-0.4-1,0.2C67,24.8,67.5,24.8,67.6,24.6z M76.6,26.1c-0.2,0.1-0.2,0-0.3,0.2c0.3,0.1,0.6,0.1,0.8,0.1C77,26.2,76.8,26.1,76.6,26.1z M5,29.1C5,29.1,5,29.1,5,29.1z M7.7,27 c-0.2-0.1-0.3-0.2-0.6,0.1C7.3,27.1,7.5,27,7.7,27z M82.3,33.9c0.6,0.5,0.9,1.6,1.4,2.3c0-0.1,0-0.2,0-0.3c0.1,0.1,0.2,0.2,0.3,0.2 c-0.3-0.4-0.7-0.7-0.7-1.2c0.2,0,0.3,0.1,0.5,0.1c-0.6-0.6-1.2-1.8-1.8-2C82.1,33.3,82.2,33.4,82.3,33.9z M5.5,28.8 c0,0,0.3,0.1,0.5,0.1c0.1,0.8,1.1-0.1,1.7-0.2c-0.2-0.5-0.7-0.4-1-0.2c0.1-0.1,0.2-0.1,0.2-0.2C6.4,27,5.6,28.5,5,29.1 C5.2,28.9,5.7,28.4,5.5,28.8z M77.6,25.8c0.2,0,0.3,0.1,0.5-0.1c-0.3-0.1-0.7-0.1-1.1-0.1C77.2,25.7,77.3,25.7,77.6,25.8z M85.8,27.1c-0.1-0.1-0.2-0.2-0.3-0.2c0,0-0.1,0.1-0.1,0.1C85.6,27.1,85.7,27,85.8,27.1z M28.5,50.6c0,0,0.1,0.3,0.2-0.2 C28.6,50.3,28.5,50.6,28.5,50.6z M7.1,29.7c-0.3-0.1-0.4-0.2-0.7,0C6.6,29.8,6.8,29.7,7.1,29.7z M9.2,31.6c-0.3,0.1-0.5,0.1-0.5,0.5 c0.2-0.1,0.5-0.2,0.7-0.3C9.3,31.5,9.3,31.7,9.2,31.6z M6.4,30.8c0.2,0,0.3,0.3,0.4,0C6.7,30.7,6.5,30.8,6.4,30.8z"
                    >
                        <animateTransform
                            attributeName="transform"
                            type="translate"
                            calcMode="linear"
                            values="0 0;100 0"
                            dur="2s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </path>
                </g>
            </svg>
        ),
    },
    {
        id: 11,
        title: __("Fidget Spinner", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="80px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-fidget-spinner"
            >
                <g transform="rotate(6 50 50)">
                    <g transform="translate(50 50)">
                        <g transform="scale(0.9)">
                            <g transform="translate(-50 -58)">
                                <path
                                    d="M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z"
                                    fill="#fc636b"
                                />
                                <path
                                    d="M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z"
                                    fill="#6a67ce"
                                />
                                <circle
                                    cx={50}
                                    cy={27}
                                    r="7.4"
                                    fill="#ffb900"
                                />
                                <path
                                    d="M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z"
                                    fill="#3be8b0"
                                />
                            </g>
                        </g>
                    </g>
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        calcMode="linear"
                        values="0 50 50;360 50 50"
                        dur="1s"
                        begin="0s"
                        repeatCount="indefinite"
                    />
                </g>
            </svg>
        ),
    },
    {
        id: 12,
        title: __("Hourglass", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="80px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-hourglass"
            >
                <defs>
                    <clipPath id="lds-hourglass-cpid-2378206027203">
                        <rect x={0} y="28.3826" width={100} height="21.6174">
                            <animate
                                attributeName="y"
                                calcMode="spline"
                                values="0;50;0;0;0"
                                keyTimes="0;0.4;0.5;0.9;1"
                                dur="2.2"
                                keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"
                                begin="0s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="height"
                                calcMode="spline"
                                values="50;0;0;50;50"
                                keyTimes="0;0.4;0.5;0.9;1"
                                dur="2.2"
                                keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"
                                begin="0s"
                                repeatCount="indefinite"
                            />
                        </rect>
                        <rect x={0} y="71.6174" width={100} height="28.3826">
                            <animate
                                attributeName="y"
                                calcMode="spline"
                                values="100;50;50;50;50"
                                keyTimes="0;0.4;0.5;0.9;1"
                                dur="2.2"
                                keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"
                                begin="0s"
                                repeatCount="indefinite"
                            />
                            <animate
                                attributeName="height"
                                calcMode="spline"
                                values="0;50;50;0;0"
                                keyTimes="0;0.4;0.5;0.9;1"
                                dur="2.2"
                                keySplines="0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7;0.3 0 1 0.7"
                                begin="0s"
                                repeatCount="indefinite"
                            />
                        </rect>
                    </clipPath>
                </defs>
                <g transform="translate(50,50)">
                    <g transform="scale(0.9)">
                        <g transform="translate(-50,-50)">
                            <g transform="rotate(0)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 50 50;0 50 50;180 50 50;180 50 50;360 50 50"
                                    keyTimes="0;0.4;0.5;0.9;1"
                                    dur="2.2s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                                <path
                                    d="M54.864,50L54.864,50c0-1.291,0.689-2.412,1.671-2.729c9.624-3.107,17.154-12.911,19.347-25.296 c0.681-3.844-1.698-7.475-4.791-7.475H28.908c-3.093,0-5.472,3.631-4.791,7.475c2.194,12.385,9.723,22.189,19.347,25.296 c0.982,0.317,1.671,1.438,1.671,2.729v0c0,1.291-0.689,2.412-1.671,2.729C33.84,55.836,26.311,65.64,24.117,78.025 c-0.681,3.844,1.698,7.475,4.791,7.475h42.184c3.093,0,5.472-3.631,4.791-7.475C73.689,65.64,66.16,55.836,56.536,52.729 C55.553,52.412,54.864,51.291,54.864,50z"
                                    clipPath="url(#lds-hourglass-cpid-2378206027203)"
                                    fill="#ffdf85"
                                />
                                <path
                                    d="M81,81.5h-2.724l0.091-0.578c0.178-1.122,0.17-2.243-0.022-3.333C76.013,64.42,68.103,54.033,57.703,50.483l-0.339-0.116 v-0.715l0.339-0.135c10.399-3.552,18.31-13.938,20.642-27.107c0.192-1.089,0.2-2.211,0.022-3.333L78.276,18.5H81 c2.481,0,4.5-2.019,4.5-4.5S83.481,9.5,81,9.5H19c-2.481,0-4.5,2.019-4.5,4.5s2.019,4.5,4.5,4.5h2.724l-0.092,0.578 c-0.178,1.122-0.17,2.243,0.023,3.333c2.333,13.168,10.242,23.555,20.642,27.107l0.338,0.116v0.715l-0.338,0.135 c-10.4,3.551-18.31,13.938-20.642,27.106c-0.193,1.09-0.201,2.211-0.023,3.333l0.092,0.578H19c-2.481,0-4.5,2.019-4.5,4.5 s2.019,4.5,4.5,4.5h62c2.481,0,4.5-2.019,4.5-4.5S83.481,81.5,81,81.5z M73.14,81.191L73.012,81.5H26.988l-0.128-0.309 c-0.244-0.588-0.491-1.538-0.28-2.729c2.014-11.375,8.944-20.542,17.654-23.354c2.035-0.658,3.402-2.711,3.402-5.108 c0-2.398-1.368-4.451-3.403-5.108c-8.71-2.812-15.639-11.979-17.653-23.353c-0.211-1.191,0.036-2.143,0.281-2.731l0.128-0.308 h46.024l0.128,0.308c0.244,0.589,0.492,1.541,0.281,2.731c-2.015,11.375-8.944,20.541-17.654,23.353 c-2.035,0.658-3.402,2.71-3.402,5.108c0,2.397,1.368,4.45,3.403,5.108c8.71,2.812,15.64,11.979,17.653,23.354 C73.632,79.651,73.384,80.604,73.14,81.191z"
                                    fill="#e15b64"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        ),
    },
    {
        id: 13,
        title: __("Kakidog", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                className="lds-kakidog"
                width="80px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <g transform="rotate(357.772 49.9997 49.9997)">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="360 50 50;0 50 50"
                        keyTimes="0;1"
                        dur="1.5s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.5 0 0.5 1"
                        begin="-0.15000000000000002s"
                    />
                    <circle
                        cx={50}
                        cy={50}
                        r="39.891"
                        stroke="#dec17a"
                        strokeWidth="14.4"
                        fill="none"
                        strokeDasharray="0 300"
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            values="15 300;55.1413599195142 300;15 300"
                            keyTimes="0;0.5;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                            calcMode="linear"
                            keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
                            begin="-0.069s"
                        />
                    </circle>
                    <circle
                        cx={50}
                        cy={50}
                        r="39.891"
                        stroke="#ffffff"
                        strokeWidth="7.2"
                        fill="none"
                        strokeDasharray="0 300"
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            values="15 300;55.1413599195142 300;15 300"
                            keyTimes="0;0.5;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                            calcMode="linear"
                            keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
                            begin="-0.069s"
                        />
                    </circle>
                    <circle
                        cx={50}
                        cy={50}
                        r="32.771"
                        stroke="#000000"
                        strokeWidth={1}
                        fill="none"
                        strokeDasharray="0 300"
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            values="15 300;45.299378454348094 300;15 300"
                            keyTimes="0;0.5;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                            calcMode="linear"
                            keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
                            begin="-0.069s"
                        />
                    </circle>
                    <circle
                        cx={50}
                        cy={50}
                        r="47.171"
                        stroke="#000000"
                        strokeWidth={1}
                        fill="none"
                        strokeDasharray="0 300"
                    >
                        <animate
                            attributeName="stroke-dasharray"
                            values="15 300;66.03388996804073 300;15 300"
                            keyTimes="0;0.5;1"
                            dur="1.5s"
                            repeatCount="indefinite"
                            calcMode="linear"
                            keySplines="0 0.4 0.6 1;0.4 0 1 0.6"
                            begin="-0.069s"
                        />
                    </circle>
                </g>
                <g transform="rotate(0.544159 50 50)">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="360 50 50;0 50 50"
                        keyTimes="0;1"
                        dur="1.5s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.5 0 0.5 1"
                    />
                    <path
                        fill="#dec17a"
                        stroke="#000000"
                        d="M97.2,49.3c0.1,6.3-1.1,12.6-3.4,18.4l-13.4-5.4c1.6-4,2.5-8.4,2.4-12.8"
                    />
                    <path
                        fill="#ffffff"
                        d="M93.6,49.3l-0.1,3.7l-0.4,3.7c-0.4,2.1-2.3,3.4-4.1,2.9l-0.2-0.1c-1.9-0.5-3-2.3-2.7-4l0.4-3.1l0.1-3.1"
                    />
                    <path
                        fill="#dec17a"
                        stroke="#000000"
                        d="M85.5,62.3c-0.2,0.7-0.5,1.4-0.8,2.1l-0.9,2.1c-0.6,1.1-2,1.5-3.2,0.8c-1.1-0.7-1.7-2-1.1-2.9l0.8-1.8 c0.3-0.6,0.5-1.2,0.7-1.9"
                    />
                    <path
                        fill="#dec17a"
                        stroke="#000000"
                        d="M94.6,65.5c-0.3,0.9-0.6,1.8-1,2.7l-1.1,2.6c-0.8,1.4-2.3,2-3.5,1.3v0c-1.1-0.7-1.5-2.2-0.9-3.4l1-2.4 c0.3-0.8,0.7-1.6,0.9-2.4"
                    />
                </g>
                <g transform="rotate(357.772 49.9997 49.9997)">
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="360 50 50;0 50 50"
                        keyTimes="0;1"
                        dur="1.5s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.5 0 0.5 1"
                        begin="-0.15000000000000002s"
                    />
                    <path
                        fill="#dec17a"
                        stroke="#000000"
                        d="M97.2,50.1c0-5-0.8-10-2.4-14.8c-0.4-1.2-1-2.2-1.8-3c-0.7-0.8-1.7-1.4-2.7-1.8c0,0.6-0.3,1.2-0.8,1.5 c-0.8,0.3-1.7,0-2.1-0.8l-0.5-1c-0.6,0.1-1.2,0.3-1.8,0.7c-0.6,0.3-1.1,0.7-1.6,1.2l0.4,0.9c0.4,0.7,0,1.6-0.8,2 c-0.6,0.3-1.2,0.2-1.6-0.1c-0.4,0.8-0.5,1.7-0.7,2.5c-0.1,0.9,0,1.7,0.3,2.5c1,3.3,1.6,6.8,1.6,10.2"
                    />
                    <path
                        fill="#ffffff"
                        d="M86.4,50.1c0-1.3-0.1-2.6-0.2-3.8c-0.3-1.7,1-3.4,2.9-3.8l0.3,0c1.9-0.4,3.7,1,4,3.1c0.1,1.5,0.2,3.1,0.2,4.6"
                    />
                    <path
                        fill="#ff9922"
                        d="M93.1,34.1c0.1,0.4-0.3,0.8-0.9,1.1c-0.6,0.2-1.2,0.1-1.4-0.2c-0.1-0.3,0.3-0.8,0.9-1.1 C92.4,33.6,93,33.7,93.1,34.1z"
                    />
                    <path
                        fill="#ff9922"
                        d="M81.9,38.3c0.1,0.3,0.7,0.3,1.3,0.1c0.6-0.2,1-0.6,0.9-0.9c-0.1-0.3-0.7-0.3-1.3-0.1 C82.2,37.6,81.8,38,81.9,38.3z"
                    />
                    <path
                        fill="#ff9922"
                        stroke="#000000"
                        d="M87.5,38.5l0.2,0.7c0.1,0.4,0.5,0.7,1,0.6c0.4-0.1,0.7-0.6,0.6-1L89,38"
                    />
                    <path d="M88.5,36.3c0.1,0.3-0.2,0.7-0.6,0.9c-0.5,0.2-0.9,0-1.1-0.3c-0.1-0.3,0.2-0.7,0.6-0.9C87.9,35.8,88.4,36,88.5,36.3z" />
                    <path
                        fill="none"
                        stroke="#000000"
                        d="M85.8,38c0.2,0.5,0.8,0.9,1.4,0.7c0.6-0.2,1.1-0.4,0.6-1.6c0.4,1.2,0.9,1.1,1.5,0.9c0.6-0.2,0.9-0.8,0.7-1.5"
                    />
                    <path
                        fill="#dec17a"
                        stroke="#000000"
                        d="M86.8,42.1c0.2,0.7,0.2,1.5,0.4,2.2c0.1,0.8,0.3,1.5,0.3,2.3c0.1,1.3-0.9,2.3-2.3,2.3h0 c-1.3,0-2.5-0.8-2.5-1.9c0-0.7-0.2-1.3-0.3-2c-0.1-0.7-0.2-1.3-0.3-2"
                    />
                    <path
                        fill="#dec17a"
                        stroke="#000000"
                        d="M96.1,40.1c0.2,0.9,0.3,1.9,0.5,2.8c0.1,0.9,0.3,1.9,0.4,2.8c0.1,1.6-0.9,2.9-2.2,2.9c-1.3,0-2.5-1.1-2.5-2.5 c0-0.9-0.2-1.7-0.3-2.5c-0.1-0.8-0.2-1.7-0.4-2.5"
                    />
                    <path
                        fill="#000000"
                        d="M90.9,33.7c0.2,0.6,0,1.3-0.6,1.5c-0.5,0.2-1.2-0.1-1.4-0.7c-0.2-0.6,0-1.2,0.6-1.5C90,32.7,90.6,33,90.9,33.7z"
                    />
                    <path
                        fill="#000000"
                        d="M85.3,35.9c0.2,0.5-0.1,1.1-0.6,1.3c-0.5,0.2-1.1,0-1.3-0.5c-0.2-0.5,0.1-1.1,0.6-1.3C84.5,35.1,85.1,35.4,85.3,35.9z"
                    />
                    <path
                        fill="#8f722f"
                        stroke="#000000"
                        d="M83.2,34.9c0.8-0.3,1.1-1.2,0.8-2L83.5,32c-0.9,0.8-1.5,1.7-2,2.7C82,35.1,82.6,35.2,83.2,34.9z"
                    />
                    <path
                        fill="#8f722f"
                        stroke="#000000"
                        d="M89.6,32c0.6-0.3,0.9-0.8,0.8-1.5c-1.1-0.4-2.3-0.5-3.4-0.3l0.5,1C87.8,32,88.8,32.3,89.6,32z"
                    />
                </g>
            </svg>
        ),
    },
    {
        id: 14,
        title: __("Spinner", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                className="lds-spinner"
                width="75px"
                height="75px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <g transform="rotate(0 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.9375s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(22.5 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.875s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(45 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.8125s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(67.5 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.75s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(90 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.6875s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(112.5 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.625s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(135 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.5625s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(157.5 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.5s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(180 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.4375s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(202.5 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.375s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(225 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.3125s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(247.5 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.25s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(270 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.1875s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(292.5 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.125s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(315 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="-0.0625s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
                <g transform="rotate(337.5 50 50)">
                    <rect
                        x={47}
                        y={18}
                        rx={2}
                        ry={2}
                        width={6}
                        height={14}
                        fill="#ff7c81"
                    >
                        <animate
                            attributeName="opacity"
                            values="1;0"
                            dur="1s"
                            begin="0s"
                            repeatCount="indefinite"
                        />
                    </rect>
                </g>
            </svg>
        ),
    },
    {
        id: 15,
        title: __("Triangles", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="80px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-triangles"
            >
                <g transform="translate(50,42)">
                    <g transform="scale(0.8)">
                        <g transform="translate(-50,-50)">
                            <polygon
                                points="72.5,50 50,11 27.5,50 50,50"
                                fill="#f5c037"
                                transform="rotate(186 50 38.5)"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 50 38.5;360 50 38.5"
                                    keyTimes="0;1"
                                    dur="1s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </polygon>
                            <polygon
                                points="5,89 50,89 27.5,50"
                                fill="#d34c31"
                                transform="rotate(186 27.5 77.5)"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 27.5 77.5;360 27.5 77.5"
                                    keyTimes="0;1"
                                    dur="1s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </polygon>
                            <polygon
                                points="72.5,50 50,89 95,89"
                                fill="#e88432"
                                transform="rotate(186 72.2417 77.5)"
                            >
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 72.5 77.5;360 72 77.5"
                                    keyTimes="0;1"
                                    dur="1s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                            </polygon>
                        </g>
                    </g>
                </g>
            </svg>
        ),
    },
    {
        id: 16,
        title: __("Wedges", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                width="200px"
                height="200px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
                className="lds-wedges"
            >
                <g transform="translate(50,50)">
                    <g transform="scale(0.7)">
                        <g transform="translate(-50,-50)">
                            <g transform="rotate(239.504 50 50)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 50 50;360 50 50"
                                    keyTimes="0;1"
                                    dur="0.75s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                                <path
                                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                                    fillOpacity="0.8"
                                    fill="#f05125"
                                />
                            </g>
                            <g transform="rotate(359.628 50.0024 50.0024)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 50 50;360 50 50"
                                    keyTimes="0;1"
                                    dur="1s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                                <path
                                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                                    transform="rotate(90 50 50)"
                                    fillOpacity="0.8"
                                    fill="#fdb813"
                                />
                            </g>
                            <g transform="rotate(119.752 50 50)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 50 50;360 50 50"
                                    keyTimes="0;1"
                                    dur="1.5s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                                <path
                                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                                    transform="rotate(180 50 50)"
                                    fillOpacity="0.8"
                                    fill="#7fbb42"
                                />
                            </g>
                            <g transform="rotate(239.876 50 50)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    calcMode="linear"
                                    values="0 50 50;360 50 50"
                                    keyTimes="0;1"
                                    dur="3s"
                                    begin="0s"
                                    repeatCount="indefinite"
                                />
                                <path
                                    d="M50 50L50 0A50 50 0 0 1 100 50Z"
                                    transform="rotate(270 50 50)"
                                    fillOpacity="0.8"
                                    fill="#32a0da"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        ),
    },
    {
        id: 17,
        title: __("Whirl", "pninja-media-gallery"),
        isPro: true,
        icon: (
            <svg
                className="lds-whirl"
                width="80px"
                height="80px"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="xMidYMid"
            >
                <g transform="translate(50,50)">
                    <g transform="scale(0.7)">
                        <g transform="translate(-50,-50)">
                            <g transform="rotate(216.113 50 50)">
                                <animateTransform
                                    attributeName="transform"
                                    type="rotate"
                                    repeatCount="indefinite"
                                    values="360 50 50;0 50 50"
                                    keyTimes="0;1"
                                    dur="1s"
                                    keySplines="0.5 0.5 0.5 0.5"
                                    calcMode="spline"
                                />
                                <path
                                    fill="#e15b64"
                                    d="M52.5,5c-0.8,0-1.7,0.1-2.5,0.1c9,1.2,16,10.8,16,22.4s-7,21.1-16,22.4c0.8,0.1,1.7,0.1,2.5,0.1 C64.9,50,75,39.9,75,27.5S64.9,5,52.5,5z"
                                />
                                <path
                                    fill="#f47e60"
                                    d="M83.6,19.9c-0.6-0.6-1.2-1.2-1.9-1.7c5.5,7.2,3.7,18.9-4.5,27.1s-19.9,10-27.1,4.5c0.5,0.6,1.1,1.3,1.7,1.9 c8.8,8.8,23,8.8,31.8,0S92.4,28.7,83.6,19.9z"
                                />
                                <path
                                    fill="#f8b26a"
                                    d="M95,52.5c0-0.8-0.1-1.7-0.1-2.5c-1.2,9-10.8,16-22.4,16s-21.1-7-22.4-16c-0.1,0.8-0.1,1.7-0.1,2.5 C50,64.9,60.1,75,72.5,75S95,64.9,95,52.5z"
                                />
                                <path
                                    fill="#abbd81"
                                    d="M80.1,83.6c0.6-0.6,1.2-1.2,1.7-1.9c-7.2,5.5-18.9,3.7-27.1-4.5s-10-19.9-4.5-27.1c-0.6,0.5-1.3,1.1-1.9,1.7 c-8.8,8.8-8.8,23,0,31.8S71.3,92.4,80.1,83.6z"
                                />
                                <path
                                    fill="#e15b64"
                                    d="M47.5,95c0.8,0,1.7-0.1,2.5-0.1c-9-1.2-16-10.8-16-22.4s7-21.1,16-22.4c-0.8-0.1-1.7-0.1-2.5-0.1 C35.1,50,25,60.1,25,72.5S35.1,95,47.5,95z"
                                />
                                <path
                                    fill="#f47e60"
                                    d="M16.4,80.1c0.6,0.6,1.2,1.2,1.9,1.7c-5.5-7.2-3.7-18.9,4.5-27.1s19.9-10,27.1-4.5c-0.5-0.6-1.1-1.3-1.7-1.9 c-8.8-8.8-23-8.8-31.8,0S7.6,71.3,16.4,80.1z"
                                />
                                <path
                                    fill="#f8b26a"
                                    d="M5,47.5c0,0.8,0.1,1.7,0.1,2.5c1.2-9,10.8-16,22.4-16s21.1,7,22.4,16c0.1-0.8,0.1-1.7,0.1-2.5 C50,35.1,39.9,25,27.5,25S5,35.1,5,47.5z"
                                />
                                <path
                                    fill="#abbd81"
                                    d="M19.9,16.4c-0.6,0.6-1.2,1.2-1.7,1.9c7.2-5.5,18.9-3.7,27.1,4.5s10,19.9,4.5,27.1c0.6-0.5,1.3-1.1,1.9-1.7 c8.8-8.8,8.8-23,0-31.8S28.7,7.6,19.9,16.4z"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        ),
    },
    /* </fs_premium_only> */
];
