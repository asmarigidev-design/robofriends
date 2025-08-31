import React from 'react';
import CardList from './components/Card/CardList.js';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll.js';
import ErrorBoundry from './components/ErrorBoundry.js';

// شروع کامپوننت اصلی اپلیکیشن - App component starts
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      Searchfield: ''
    };
  }

  // دریافت داده‌ها هنگام بارگذاری کامپوننت - Fetching data on component mount
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  // هندل کردن تغییرات جستجو - Handling search input changes
  onSearchChange = (event) => {
    this.setState({ Searchfield: event.target.value });
  }

  // رندر کردن رابط کاربری - Rendering UI
  render() {
    const { robots, Searchfield } = this.state;

    // فیلتر کردن ربات‌ها بر اساس ورودی جستجو - Filtering robots by search input
    const filteredRobot = robots.filter(robot =>
      robot.name.toLowerCase().includes(Searchfield.toLowerCase())
    );

    return !robots.length ? (
      <h1>loding</h1>
    ) : (
      // ساختار اصلی رابط کاربری - Main UI structure
      <div className='tc'>
        <h1 className='f1'>Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobot} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

// خروجی گرفتن از کامپوننت - Exporting App component
export default App;
