export interface EmptyStateProps extends React.HTMLAttributes<HTMLTableElement> {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}