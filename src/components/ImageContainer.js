import React from 'react'

class ImageContainer extends React.Component {

    imageClick = () => {
        this.props.onClick(this.props.imageIndex)
    }

    render() {
        const { id, image } = this.props,
              { imageDescription } = this.props

        return (
            <div className="ImageContainer">
                <img
                    key={id}
                    src={image}
                    alt="img"
                    onClick={this.imageClick}
                />
                <p>
                    {imageDescription}
                </p>
            </div>
        )
    }
}

export { ImageContainer }