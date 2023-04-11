type NavProps = React.ComponentPropsWithoutRef<"nav">;

export const Nav: React.FC<NavProps> = ({ ...props }) => {
  return <nav className="bg-accent-800 py-6" {...props} />;
};
