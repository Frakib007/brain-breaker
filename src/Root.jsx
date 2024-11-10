import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TaskContainer from "./components/Tasks/TaskContainer";
import TaskProvider from "./contexts/TaskProvider";

export default function Root() {
  return (
    // Wrap components in TaskProvider to make task data available throughout the app
    <TaskProvider>
      {/* ToastContainer for displaying ephemeral notifications */}
      <ToastContainer
        position="bottom-right" // Position toasts at the bottom-right corner
        autoClose={2000} // Automatically close toasts after 2 seconds
      />
      {/* <Header /> */}
      <Hero />
      <TaskContainer />
      <Footer />
    </TaskProvider>
  );
}
