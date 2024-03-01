const eventRepo = require('../repos/eventRepo');
const donationTypesRepo = require('../repos/donationTypeRepo');

const homeData = async (req, res) => {
    try {
        let upcomingEvents = await eventRepo.upcoming();
        let donationTypes = await donationTypesRepo.get();
        res.status(200).send({
            success: true,
            message: 'Home screen data fetched successfully',
            upcomingEvents : upcomingEvents,
            donationTypes: donationTypes,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
        });
    }
}