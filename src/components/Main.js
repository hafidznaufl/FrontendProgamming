import Footer from "./Footer";
import Header from "./Header";
import Hello from "./Hello";

const Main = () => {
  return (
    <div>
      <Header />
      <Hello name="Hafidz" role = 'Frontend Engineer' />
      <Hello name="Naufal" role = 'Backend Engineer'/>
      <Hello name="Bariklana" role = 'Devops'/>
      <Hello name="Thoifur" role = 'UI/UX Designer'/>
      <Footer />
    </div>
  );
};

export default Main;
