import Section_header from "components/card-base/Section_header";
import Section_body from "components/card-base/Section_body";
import Layouts from "layouts/layouts";

const Users = () => {
  return (
    <>
      <Layouts>
        <div class="main-content" style={{ minHeight: 581 }}>
          <section class="section">
            <Section_header titleUsers="Usuarios" />
            <Section_body titleListUsers="Listado de Usuarios" />
          </section>
        </div>
      </Layouts>
    </>
  );
};
export default Users;
