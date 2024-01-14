import HeaderComponent from "../component/header.js"
import FooterComponent from "../component/footer.js"
const HomePage = function () {
    return `
      ${HeaderComponent()}
       <h1>Content</h1>
      ${FooterComponent()}
    `
  }
  export default  HomePage
