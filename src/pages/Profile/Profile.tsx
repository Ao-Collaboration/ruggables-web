import useStyles from './Profile.styles'
import PageWrapper from '../../components/PageWrapper/PageWrapper'
import RuggableList from '../../components/RuggableList/RuggableList'

const Profile = () => {
	const classes = useStyles()

	return (
		<PageWrapper>
			<div className={classes.page}>
				<RuggableList />
			</div>
		</PageWrapper>
	)
}

export default Profile
