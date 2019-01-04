const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class Contact extends React.Component {
  render() {    
    const contactLinks = [
      {
        title: 'E-mail',
        content: 'rakin [dot] uddin [at] mail [dot] utoronto [dot] ca'
      },
      {
        title: 'Piazza',
        content: 'Head to your corresponding Piazza group and post a question!'
      }
    ]

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Contact Me</h1>
            </header>
            <p>
              Feel free to reach out to me in the following places for any 
              questions regarding any course.
            </p>
          </div>
          <GridBlock contents={contactLinks} layout="twoColumn" />
        </Container>
      </div>
    )
  }
}

module.exports = Contact;
