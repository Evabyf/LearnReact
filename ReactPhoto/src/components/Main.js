require('normalize.css/normalize.css');
require('styles/App.scss');


import React from 'react';
//单独的文件就是一个模块
// let yeomanImage = require('../images/yeoman.png');


//获取图片相关数据
var imagesData=require('../data/imagesData.json');
//利用自执行函数。将图片名信息转成图片URL路径信息
imagesData=(function genImageurl(imageDataArr) {
  for(var i=0,j=imageDataArr.length;i<j;i++){
    var singleImageData=imageDataArr[i];
    singleImageData.imageUrl=require('../images/'+singleImageData.fileName);
    imageDataArr[i]=singleImageData;
  }
  return imageDataArr;
})(imagesData);


//单个图片react
class ImgFigure extends React.Component{
  render(){
    return(
      <figure>
        <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
        <figcaption>
          <h2></h2>
        </figcaption>
      </figure>
    )
  }
}

class AppComponent extends React.Component {
  render() {
    var controllerUnits=[],imgFigures=[];

    imagesData.forEach(function (e) {
       imgFigures.push(<ImgFigure data={e}/>);
    });

    return (

      <section className="stage">
          <section className="img-sec">
            {imgFigures}
          </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
      // <div className="index">
      //   <img src={yeomanImage} alt="Yeoman Generator" />
      //   <div className="notice">Hello  Please edit <code>src/components/Main.js</code> to get started!</div>
      // </div>
    );
  }
}




AppComponent.defaultProps = {
};

export default AppComponent;






























