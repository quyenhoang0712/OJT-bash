import './App.css';
import Greeting from "./components/Greeting";
import WelcomeMessage from "./components/WelcomeMessage";
import Counter from "./components/Counter";
import InputDisplay from "./components/InputDisplay";
import UserList from "./components/UserList";
import GreetingMessage from "./components/GreetingMessage";
import StyledButton from "./components/StyledButton";
import UserListAPI from "./components/UserListAPI"; 
import RegisterForm from "./components/RegisterForm"
import FocusInput from "./components/FocusInput";
import DropdownMenu from "./components/DropdownMenu"; 
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import ModalExample from "./components/ModalExample";
import ProgressBar from "./components/ProgressBar";
import Accordion from "./components/Accordion";
import Tooltip from "./components/Tooltip";
import InfiniteScroll from "./components/InfiniteScroll";
import CountdownTimer from "./components/CountdownTimer";

function App() {
  return (
         <div>
      <h1>Chào mừng đến với React!</h1>
      <Greeting name="Quyen" />
      <h1>React App</h1>
      <WelcomeMessage name="Quyen" />
      <h1>React Counter</h1>
      <Counter />
      <h1>React Input Display</h1>
      <InputDisplay />
      <h1>React User List</h1>
      <UserList />
      <div>
      <h1>React Greeting Message</h1>
      <GreetingMessage isAdmin={false} />
    </div>
    <h1>React Styled Button</h1>
      <StyledButton text="Nhấn vào tôi" />
      <h1>Danh sách người dùng từ API</h1>
      <UserListAPI />
      <h1>React Register Form</h1>
      <RegisterForm />
      <h1>React Focus Input</h1>
      <FocusInput />
      <h1>React Dropdown Menu</h1>
      <DropdownMenu />
      <h1>React Image Carousel</h1>
      <Carousel />
      <h1>React Search Bar</h1>
      <SearchBar />
      <h1>React Modal Popup</h1>
      <ModalExample />
      <h1>React Progress Bar</h1>
      <ProgressBar />
      <h1>React Accordion</h1>
      <Accordion title="Tiêu đề 1" content="Nội dung của accordion 1." />
      <Accordion title="Tiêu đề 2" content="Nội dung của accordion 2." />
      <Accordion title="Tiêu đề 3" content="Nội dung của accordion 3." />
      <h1>React Tooltip</h1>
      <Tooltip message="Đây là Tooltip của tôi!" />
      <h1>React Infinite Scroll</h1>
      <InfiniteScroll />
      <h1>React Countdown Timer</h1>
      <CountdownTimer initialMinutes={10} />

    </div>
  );
}

export default App;
