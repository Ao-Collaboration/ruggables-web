import useStyles from './Profile.styles'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import RuggableList from '../../components/RuggableList/RuggableList'
import ContentWrapper from '../../components/ContentWrapper/ContentWrapper'
import PlayHelp from '../../help/PlayHelp'
import TextButtonBox from '../../components/TextButtonBox/TextButtonBox'

const Profile = () => {
	const classes = useStyles()

	const depositPull = async () => {
		//FIXME
		const a = 1
	}

	const withdrawPull = async () => {
		//FIXME
		const a = 1
	}

	return (
		<PageWrapper>
			<ContentWrapper>
				<div className={classes.boxSection}>
					<TextButtonBox title='$PULL Balance' content='XXX' btnText='Deposit $PULL' onClick={depositPull} />
					<TextButtonBox title='$PULL Deposited' content='XXX' btnText='Withdraw $PULL' onClick={withdrawPull} />
				</div>
				<RuggableList />
			</ContentWrapper>
			<PlayHelp />
		</PageWrapper>
	)
}

export default Profile
