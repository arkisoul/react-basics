import {TopNavbar} from '../../components/navbar/top/TopNavbar'
import './Main.css'

function MainLayout(props) {
    return (
      <div className="main">
        <TopNavbar count={props.count} />
        <div className="content">
          <div className="main-content">{props.main}</div>
          {props.sidebar && <div className="sidebar">{props.sidebar}</div>}
        </div>
        {props.footer && <div className="footer">{props.footer}</div>}
      </div>
    );
}

export default MainLayout;