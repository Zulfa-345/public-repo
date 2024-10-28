import "../components/Insta.css" 
import { Fragment } from "react"
import { IoMdHome } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlineExplore } from "react-icons/md";
import { SiImessage } from "react-icons/si";
import { IoIosNotifications } from "react-icons/io";
import { IoCreateOutline } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { Container, Row, Col, Card, Nav, Button, Image, Stack} from "react-bootstrap"
const InstaPage=()=>
{
    const stories = [
        { id: 1, image: 'https://th.bing.com/th?id=OIP.XbKI2fzpiPZjN0Va3fqfiAHaFA&w=303&h=205&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2/', username: 'solo_travel' },
        { id: 2, image: 'https://th.bing.com/th/id/OIP.7el2PQC2KemoRyxG11sIUAHaEG?w=305&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', username: 'naturly' },
        { id: 3, image: 'https://th.bing.com/th/id/OIP._6UW1704oYjKYfVcf84iMgHaEc?w=274&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7', username: 'fly_high' },
        { id: 4, image: 'https://th.bing.com/th?id=OIP.fkWr_1EeH5QcmzbfQ7GlvQHaE8&w=306&h=204&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2',username:'lost_thoughts'},
        { id: 5, image :'shopping3.jpg', username:'shopper'},
        { id :6, image :'shopping2.jpg', username:'dailythings'},
        { id :7, image :'volvocar.jpg',username : 'egzita'},
         { id: 8,
          image: "https://th.bing.com/th/id/OIP.17HyV-UvTJds9sodTm3byAHaE8?pid=ImgDet&w=178&h=118&c=7&dpr=1.5",
          username: "trap_de_lyf"
      },
      {
          id: 9,
          image: "https://th.bing.com/th/id/OIP.cvWkJCV0vFdxr0m8ZYtwgwHaHw?w=143&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          username: "be_holder"
      },
      {
          id: 10,
          image: "https://th.bing.com/th/id/OIP.Mbhm6L0wPjJX5-zs5cxn1QHaEb?w=313&h=187&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          username: "dee_vizan"
      },
      {
          id: 11,
          image: "https://th.bing.com/th/id/OIP.6DGciKDYNMB3oDUsE8zFgAHaFE?w=216&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          username: "solitude"
      },
      {
          id: 12,
          image: "https://th.bing.com/th/id/OIP.ZD5UWkqwrjlmm5M5mWO0BgHaHa?w=197&h=197&c=7&r=0&o=5&dpr=1.5&pid=1.7",
          username: "pas_sion"
      }
      ]
      
      const suggestedPeople = [
        { id: 1, username: 'dark_knight', image:'https://th.bing.com/th?id=OIP.Lcnlcnh2wiFs6ajTCk32MAAAAA&w=306&h=203&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2' },
        { id: 2, username: 'wild_dreamer',image:'https://th.bing.com/th?id=OIP.LbyhcH9syTEdfPE2iMVsMAHaFf&w=290&h=215&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2' },
        { id: 3, username: 'void_soul', image:'https://th.bing.com/th?id=OIP.lidKT4xK58GfVzpEkM184QAAAA&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2' },
        { id: 4, username: 'happy_kid', image:'https://th.bing.com/th?id=OIP.8UmookRnIXvi6x3siDeDRwHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2'},
        { id: 5, username: 'inspirin_lyf', image:'https://th.bing.com/th?id=OIP.GOEdD4QC0N7cnnaAvxVR6wHaE7&w=306&h=204&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2'}
      ];
      
      const posts = [
        { id: 1,username:'car_craze', image: 'volvocar.jpg', caption: '"Remember that happiness is a way of travel – not a destination." - Roy M. Goodman' },
        { id: 2,username:'day_mart', image: 'shopping1.jpg', caption: 'Best Sale of the year' },
        { id: 3,username:'advent_boy', image: 'https://th.bing.com/th?id=OIP.XHwZTLhrCyJ2vd0bCO2WjgHaE8&w=306&h=204&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2', caption: 'One’s destination is never a place, but a new way of seeing things.' },
        { id: 4,username:'mind_travels', image: 'https://th.bing.com/th?id=OIP.GOEdD4QC0N7cnnaAvxVR6wHaE7&w=306&h=204&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2', caption: 'A reader lives a thousand lives before he dies . . . The man who never reads lives only one.' },
        { id: 5,username:'tummy_yummy', image: 'https://th.bing.com/th?id=OIP.flJzzqdpzl5N9WniwzVlYgHaE8&w=306&h=204&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2', caption: 'People who love to eat are always the best people.' },
        { id: 6,username:'warrior_x', image: 'https://th.bing.com/th?id=OIP.8UmookRnIXvi6x3siDeDRwHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=1.5&pid=3.1&rm=2', caption: 'The best fighter is never angry.' }
      ];
return <Fragment>
    
    <div>

    <Container fluid>
      <Row>
        {/* SideSection */}
        <Col xs={3} className="bg-light vh-100 p-4 " style={{position:"fixed",zIndex:"2"}}>
        <div><img src="instagramlogo.jpg" alt="logo" height="70" width={110}></img></div>
          <Nav defaultActiveKey="./Home" className="flex-column" >
         
            <Nav.Link href="#"><IoMdHome/>Home</Nav.Link>
            <Nav.Link href="#"><IoSearchSharp/>Search</Nav.Link>
            <Nav.Link href="#"><MdOutlineExplore/>Explore</Nav.Link>
            <Nav.Link href="#"><SiImessage/>Messages</Nav.Link>
            <Nav.Link href="#"><IoIosNotifications/>Notifications</Nav.Link>
            <Nav.Link href="#"><IoCreateOutline/>Create</Nav.Link>
            <Nav.Link href="#"><ImProfile/>Profile</Nav.Link>
           
          </Nav>
        </Col>

        {/* Content in Feed*/}
        <Col xs={6} className="p-4" style={{marginLeft:"auto"}}>
        <div >
          <Row className="d-flex  overflow-auto flex-nowrap mb-4">
            {stories.map(story => (
              <Col style={{width:"100px"}} key={story.id} className="flex-shrink-0 text-center">
                <div>
                <Image src={story.image} alt={story.username} roundedCircle fluid/>
                <p>{story.username}</p></div>
              </Col>
            ))}
          </Row>
          </div>

        
          <Row>
            {posts.map(post => (
              <Col key={post.id} xs={12} sm={12} md={12} lg={12} >
                <Card className="alignfeed">
                <Card.Header className="inline">
                 <div><Image src={post.image} style={{width:"45px"}} alt={post.username} roundedCircle fluid/></div>
                 <h4>{post.username}</h4></Card.Header>
                  <Card.Img variant="top" src={post.image} className="img-fluid"/>
                  <Card.Body>
                    <Card.Text>
                     
                      <div className="inline" fluid>
                      <h6 style={{color:"black"}}>{post.username}</h6>
                     <h5>{post.caption}</h5></div>
                       <h6>View all comments</h6>
                        <h6>3 days ago</h6>
                    </Card.Text>
                  </Card.Body>
                  <Card.Footer><input type="text" placeholder="Add a comment"></input></Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>

        {/* Suggested Profiles */}
        <Col xs={3} className="bg-light vh-100 p-4 position-sticky top-0">
          <h4>Suggestions For You</h4>
          {suggestedPeople.map(profile => (
            <Card className="mb-2" key={profile.id}>
              <Card.Body>
                <Stack direction="horizontal" gap={3} >
      <div><Image src={profile.image} alt={profile.username} roundedCircle fluid/></div>
      <div ><Card.Text><h6>{profile.username}</h6></Card.Text></div>
      <div className="ms-auto"><Button variant="primary">Follow</Button></div>
    </Stack>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
        </div>
       
</Fragment>
}
export default InstaPage