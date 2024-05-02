import "./label.css";

type LabelProps = {
  /**
   * Text to display
   */
  label: string;
  /**
   * Text size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Text capitalized
   */
  allCaps?: boolean;
  /**
   * Text color
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Label background color
   */
  backgroundColor?: string;
};

export const Label = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  backgroundColor = "#FFFFFF"
}: LabelProps) => {
  return (
    <span className={`${size} ${color}`} style={{ backgroundColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
