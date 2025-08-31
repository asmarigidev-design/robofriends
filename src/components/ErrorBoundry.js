import React from 'react';

// کامپوننت مدیریت خطا برای گرفتن ارورها در فرزندان - Error boundary component to catch errors in children
class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  // گرفتن خطاهای رخ‌داده در کامپوننت‌های فرزند - Catching errors in child components
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  // رندر کردن پیام خطا یا ادامه دادن به فرزندان - Rendering error message or children
  render() {
    if (this.state.hasError) {
      return <h1>oops that not good!</h1>;
    }
    return this.props.children;
  }
}

// خروجی گرفتن از کامپوننت مدیریت خطا - Exporting ErrorBoundry component
export default ErrorBoundry;
