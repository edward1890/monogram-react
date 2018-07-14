import React from 'react'
// import FontPreviews from '../fontPreviews'

@inject('store')
@observer
class PickFontStep extends React.Component {
	render() {
		return (
			<div className="pick-font-step">
				<div className="p-3 mb-4 bg-light">
					<p className="text-center"><strong>Please Read</strong></p>
					<ul className="small">
						<li>Unattached capital letters will be joined with the rest of the word.</li>
						<li>Dots in lowercase i and j characters come attached to the sign. You may request them as separate pieces in the order notes.</li>
						<li className="mb-0">Multiple words will be joined to be a single piece. For example "John & Mary" will be cut as "John&Mary" so all characters touch. If you would like them as separate pieces please request in the order notes.</li>
					</ul>
				</div>
				<div className="form-group">
					<label htmlFor="customText">Enter Name</label>
					<input
						placeholder={this.props.store.placeholderText}
						onChange={e => this.props.store.updateText(e.currentTarget.value)}
						value={this.props.store.text}
						className="form-control from-control-lg mb-4"
						id="customText"
						ref={input => {
							this.textInput = input
						}}
						aria-label="Custom text"
					/>
				</div>
				<FontPreviews />
			</div>
		)
	}

	componentDidMount() {
		if (!this.props.store.text) {
			this.textInput.focus()
		}
	}
}

export default PickFontStep



// WEBPACK FOOTER //
// ./src/components/PickFontStep.js 