export interface Step {
  label?: string;
  itemCount?: number;
  isSuccess?: boolean;
  isActive?: boolean;
  icon?: string;
  description?: string;
}

export type StepsDirection = "horizontal" | "vertical";
