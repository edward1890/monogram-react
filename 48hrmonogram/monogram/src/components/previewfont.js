import React, {Fragment} from 'react'
import {inject, observer} from 'mobx-react'

@inject('store')
@observer
class FontPreviews extends React.Component {
    render() {
        return (
            <div className="row font-previews-grid">
                {this.props.store.fonts.filter(font => font.etsyOptionValue).map(font => {
                    return (
                        <div className="col-12 col-md-6 mb-md-4 d-flex">
                            <div
                                key={font.name}
                                className="font-card w-100 py-3 px-md-3"
                                onClick={() => this.onClick(font)}
                            >
                                <h1
                                    className={`mb-3 mb-lg-4 mt-auto ${font.forceUppercase ? 'text-uppercase' : ''} font--${
                                        font.fontFamily
                                        }`}
                                    style={font.leftOffset ? {
                                        marginLeft: `${font.leftOffset}em`,
                                        padding: '.3em 0',
                                    } : {}}
                                >
								<span
                                    style={{
                                        fontSize: `${font.fontSizeAdjust}em`,
                                        letterSpacing: `${font.letterSpacing}px`,
                                    }}
                                >
									{this.props.store.textOrPlaceholder}
								</span>
                                </h1>
                                <div className="font-card-meta row justify-content-between mt-auto">
                                    <span className="col text-muted small">{font.name}</span>
                                    <button className="col btn btn-link p-0">
                                        Pick this font <i className="fas fa-arrow-right"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    onClick = font => {
        this.props.store.updateFont(font)
        this.props.store.nextStep()
    }
}

export default FontPreviews



// WEBPACK FOOTER //
// ./src/components/fontPreviews.js