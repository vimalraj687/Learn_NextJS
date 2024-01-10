import AdminFooter from "@/components/AdminFooter";
import AdminHeader from "@/components/AdminHeader";

export default function admin({ children, dashboard }) {
  return (
    <section>
      <AdminHeader />
      {children}
      <AdminFooter />
    </section>
  );
}
