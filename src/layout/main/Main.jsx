import {TopNavbar} from '../../components/navbar/top/TopNavbar'
import './Main.css'

function MainLayout(props) {
    return (
      <div className="main">
        <TopNavbar />
        <div className="content">
          {props.sidebar && <div className="sidebar">{props.sidebar}</div>}
          <div className="main-content">{props.main}</div>
        </div>
        {props.footer && <div className="footer">{props.footer}</div>}
      </div>
    );
}

export default MainLayout;