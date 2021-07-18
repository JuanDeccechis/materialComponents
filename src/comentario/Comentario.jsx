import React, { Component } from "react";
import { withTheme } from '../context/ThemeContext';
import FormAgregarComentario from './FormAgregarComentario';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import './comentario.css';

class Comentario extends Component {
  constructor(props) {
    super(props);
    this.state = {
        like: false,
        unlike: false,
        positives: 44,
        negatives: 2,
        width: window.innerWidth,
        showComments: false,
    };
    this.voteLike = this.voteLike.bind(this);
    this.voteUnlike = this.voteUnlike.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleToogleComments = this.handleToogleComments.bind(this);
  }

  voteLike() {
      this.setState({ like: !this.state.like });
  }

  voteUnlike() {
    this.setState({ unlike: !this.state.unlike });
  }

  componentDidMount(){
    window.addEventListener('resize', this.handleResize);
}

componentWillUnmount(){
    window.removeEventListener('resize', this.handleResize);
}

  handleResize(){
    this.setState({ width: window.innerWidth });
 }

 handleToogleComments() {
     this.setState({ showComments: !this.state.showComments });
 }

  render(){
      const { like, unlike } = this.state;
      return(

        
          <div className="comments">
          <FormAgregarComentario />
          {this.state.width >= 990 ?
            <div className="comment">
            <AccountCircleIcon />
            <div className="comment-body">
                <div><b>Luisito</b><p className="comment-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius velit aspernatur est enim vitae. Consectetur eaque molestias commodi molestiae autem? A consectetur qui incidunt officiis, enim facilis tenetur quidem commodi!</p></div><div className="comment-buttons">
                </div></div>
                <div className="votes">
            <span className="vote">
                {like ? 
                    <ThumbUpAltIcon onClick={this.voteLike} />
                :
                    <ThumbUpOutlinedIcon onClick={this.voteLike} />
                }
                {this.state.positives}</span>
            <span className="vote">
                {unlike ? 
                    <ThumbDownAltIcon onClick={this.voteUnlike} />
                :
                    <ThumbDownOutlinedIcon onClick={this.voteUnlike} />
                }
                {this.state.negatives}</span>
                </div>
            </div>
            :
                <div>
                <div onClick={this.handleToogleComments}> {this.state.showComments ? "Ocultar" : "Ver" } comentarios </div>
                {this.state.showComments && 
                <div className="comment">
                <AccountCircleIcon />
                <div className="comment-body">
                    <div><b>Luisito</b><p className="comment-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius velit aspernatur est enim vitae. Consectetur eaque molestias commodi molestiae autem? A consectetur qui incidunt officiis, enim facilis tenetur quidem commodi!</p></div><div className="comment-buttons">
                    </div></div>
                    <div className="votes">
                <span className="vote">
                    {like ? 
                        <ThumbUpAltIcon onClick={this.voteLike} />
                    :
                        <ThumbUpOutlinedIcon onClick={this.voteLike} />
                    }
                    {this.state.positives}</span>
                <span className="vote">
                    {unlike ? 
                        <ThumbDownAltIcon onClick={this.voteUnlike} />
                    :
                        <ThumbDownOutlinedIcon onClick={this.voteUnlike} />
                    }
                    {this.state.negatives}</span>
                    </div>
                </div>
                }

                </div>
          }
      </div>
      )
  }
}

export default withTheme(Comentario);
