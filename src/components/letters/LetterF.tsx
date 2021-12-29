import { FC } from 'react';
import { LetterOwnProps } from './LetterA';
export const LetterF: FC<LetterOwnProps> = ({ fill }) => {
  return (
    <span
      style={{
        marginLeft: '-0px',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/2000/svg"
        width="31"
        height="59"
      >
        <g className="avesta-char">
          <path
            d="m26.164901,132.671999c-8.328408,0 -12.492612,6.246306 -12.492612,18.738918c0,1.709108 0.694392,2.562587 2.082102,2.562587c1.92194,0 5.605659,-0.853479 11.051157,-2.562587c6.300052,-2.028357 9.44954,-3.843881 9.44954,-5.445498c0,-1.814449 -1.335039,-4.27062 -4.004042,-7.367438c-2.028357,-2.455096 -4.057788,-4.430782 -6.086144,-5.925983zm3.363396,-131.171999l0.640647,0c4.698435,6.406468 10.624417,16.229744 17.777948,29.469763c7.367438,13.773895 13.133259,23.757343 17.297463,29.950226c2.135848,3.203234 7.313692,10.196925 15.535684,20.981182c12.172289,15.909431 19.379565,27.65455 21.621829,35.235573c1.067386,3.523557 1.601617,8.648732 1.601617,15.375093c0,19.647218 -5.792694,35.343064 -17.378081,47.087538c-11.584313,11.745549 -27.14687,17.617787 -46.686597,17.617787c-9.609702,0 -17.964983,-3.016199 -25.065843,-9.048598c-7.099785,-6.032399 -11.397278,-13.800779 -12.892479,-23.304064c-0.320323,-2.028357 -0.480485,-4.216875 -0.480485,-6.56663c0,-9.289378 1.868195,-17.670457 5.605659,-25.145386c4.378111,-8.75504 10.250349,-13.132829 17.617787,-13.132829c3.737465,0 8.942182,3.923962 15.615228,11.771992c6.674121,7.847923 10.010643,13.747033 10.010643,17.69733c0,2.135848 -5.551914,5.445498 -16.656816,9.930025c-4.804851,1.92194 -12.065873,4.804851 -21.781991,8.648732l4.164204,9.129217c4.484527,5.232665 9.182962,8.008085 14.094229,8.328408c4.27062,0.854554 8.434824,1.121132 12.492612,0.800808c11.317735,0.748138 22.342019,-3.603101 33.072853,-13.052641c10.730834,-9.44954 16.096788,-19.780507 16.096788,-30.991826c0,-9.075471 -0.854554,-16.069163 -2.562587,-20.980752c-2.34868,-6.620053 -10.784579,-19.753312 -25.305548,-39.399777c-15.161616,-20.500697 -24.878808,-30.751046 -29.149429,-30.751046c-3.737465,0 -6.833207,2.295687 -9.289378,6.886953c-1.281294,2.349002 -3.043072,7.047115 -5.285336,14.094229c-1.92194,5.979406 -3.790135,9.769863 -5.605659,11.37148c-0.106416,-0.320323 -0.266578,-1.014393 -0.480485,-2.082102l6.406468,-25.46571c2.456171,-9.930025 4.004042,-18.471911 4.644689,-25.62585c-0.106416,-4.698069 0.320323,-11.691804 1.281294,-20.981204c0.640647,-2.989649 1.655362,-5.605659 3.043072,-7.847923z"
            fill={fill}
            fillRule="evenodd"
            stroke="#000000"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1"
            transform="scale(0.3 0.3) translate(0,0)"
          />
        </g>
      </svg>
    </span>
  );
};
