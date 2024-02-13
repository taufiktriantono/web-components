import { classNames, variationName } from "../../utils/css";
import styles from "./Avatar.module.scss";

export type Size = "xs" | "sm" | "md" | "lg";

const avatarStrokeWidth: { [S in Size]: string } = {
  xs: "3",
  sm: "2.5",
  md: "2.5",
  lg: "2",
};

export interface AvatarProps {
  size?: Size;
  source?: string;
  initials?: string;
  onClick: () => void;
}

export function Avatar({ size = "md", source, initials = "TT" }: AvatarProps) {
  const className = classNames(
    styles.Avatar,
    size && styles[variationName("size", size)],
  );

  const avatarPath = (
    <>
      <path
        fill="none"
        d="M25.5 13.5C25.5 16.5376 23.0376 19 20 19C16.9624 19 14.5 16.5376 14.5 13.5C14.5 10.4624 16.9624 8 20 8C23.0376 8 25.5 10.4624 25.5 13.5Z"
        stroke="currentColor"
        strokeWidth={avatarStrokeWidth[size]}
      />
      <path
        fill="none"
        d="M10.3433 29.682L9.47 31.254C9.03481 32.0373 9.60125 33 10.4974 33H29.5026C30.3988 33 30.9652 32.0373 30.53 31.254L29.6567 29.682C27.7084 26.175 24.0119 24 20 24C15.9882 24 12.2916 26.175 10.3433 29.682Z"
        stroke="currentColor"
        strokeWidth={avatarStrokeWidth[size]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  );

  const verticalOffset = "0.35em";
  const avatarBody = !initials ? (
    avatarPath
  ) : (
    <text
      x="50%"
      y="50%"
      dy={verticalOffset}
      fill="currentColor"
      textAnchor="middle"
    >
      {initials}
    </text>
  );

  const svgMarkup = !source ? null : (
    <span className={styles.Initials}>
      <svg className={styles.Svg} viewBox="0 0 40 40">
        {avatarBody}
      </svg>
    </span>
  );

  return (
    <span role={"presentation"} className={className}>
      {svgMarkup}
      {avatarBody}
    </span>
  );
}
