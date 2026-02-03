export type HabbitType = {
  id: string;
  name: string;
  description?: string;
  frequency?: "daily" | "weekly" | "monthly";
  createdAt: Date;
};
