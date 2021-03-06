import { SvgIcon } from '@material-ui/core';

function Logo({ height, width }) {
	return (
		<svg
			width={height}
			height={width}
			viewBox={`0 0 ${height} ${width}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g id="Ellipse 1" filter="url(#filter0_d)">
				<path
					d="M690.91 648.515C664.94 684.259 493.39 603.893 307.741 469.011C122.092 334.129 65.4956 172.101 91.4656 136.356C117.436 100.612 288.986 180.978 474.635 315.86C660.284 450.741 716.88 612.77 690.91 648.515Z"
					stroke="#F7EBE8"
					stroke-width="5"
					stroke-miterlimit="1"
					stroke-dasharray="6 6"
				/>
			</g>
			<g id="Ellipse 2" filter="url(#filter1_d)">
				<path
					d="M160 683.275C190.12 724.732 354.841 642.236 540.489 507.354C726.138 372.473 822.12 220.092 792 178.635C761.88 137.178 618.649 172.393 433 307.275C247.351 442.156 129.88 641.818 160 683.275Z"
					stroke="#F7EBE8"
					stroke-width="5"
					stroke-miterlimit="1"
					stroke-dasharray="6 6"
				/>
			</g>
			<g id="Ellipse 3" filter="url(#filter2_d)">
				<path
					d="M348.423 29.1918C298.038 38.5303 301.583 222.72 343.402 448.351C385.22 673.983 481.435 826.217 531.821 816.879C582.207 807.54 612.084 663.102 570.266 437.47C528.448 211.838 398.809 19.8533 348.423 29.1918Z"
					stroke="#F7EBE8"
					stroke-width="5"
					stroke-miterlimit="1"
					stroke-dasharray="6 6"
				/>
			</g>
			<defs>
				<filter
					id="filter0_d"
					x="0.507996"
					y="68.1428"
					width="781.36"
					height="656.585"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow"
						result="shape"
					/>
				</filter>
				<filter
					id="filter1_d"
					x="68.0286"
					y="88.6241"
					width="800.884"
					height="671.935"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow"
						result="shape"
					/>
				</filter>
				<filter
					id="filter2_d"
					x="261.548"
					y="0.0862732"
					width="382.339"
					height="849.229"
					filterUnits="userSpaceOnUse"
					color-interpolation-filters="sRGB"
				>
					<feFlood flood-opacity="0" result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy="4" />
					<feGaussianBlur stdDeviation="2" />
					<feColorMatrix
						type="matrix"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
					/>
					<feBlend
						mode="normal"
						in2="BackgroundImageFix"
						result="effect1_dropShadow"
					/>
					<feBlend
						mode="normal"
						in="SourceGraphic"
						in2="effect1_dropShadow"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
}

export default Logo;
