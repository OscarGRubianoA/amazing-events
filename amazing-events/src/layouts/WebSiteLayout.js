import Header from "../components/Header"
function WebSiteLayout(props){
    
    return(
        <div>
      <Header/>
      {props.children}
            <div>Footer</div>
            </div>
    )
}
export default WebSiteLayout