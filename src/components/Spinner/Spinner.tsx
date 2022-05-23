import useStyles from './Spinner.styles'

function Spinner() {
	const classes = useStyles()

	return (
		<div className={classes.spinPadding}>
			<div className={classes.spinner}>
			</div>
		</div>
	)
}

export default Spinner
