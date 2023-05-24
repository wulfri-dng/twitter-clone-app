import styled from 'styled-components';
import { Tweet } from '../Tweet/Tweet';

const FeedList = styled.div`
    color: white;
`;

export const TweetFeed = () => {
    const feedTweetsList = [
        {
            userName: 'danushanavod',
            name: 'Danusha Navod',
            profilePic: '../../images/danushanavod.jpg',
            dateTime: 'May 17',
            content:
                'The 75,000,000 great American Patriots who voted for me, AMERICA FIRST, and MAKE AMERICA GREAT AGAIN, will have a GIANT VOICE long into the future. They will not be disrespected or treated unfairly in any way, shape or form!!!',
            likeCount: 21000,
            retweetCount: 4481,
            viewCount: 45481,
            comments: [
                {
                    userName: 'Heshanka_',
                    name: 'Heshanka Fernando',
                    profilePic: '',
                    comment: 'Failure after failure. This ends soon.',
                    dateTime: '4h',
                },
            ],
        },
    ];

    return (
        <FeedList>
            {feedTweetsList.map((tweet, index) => {
                return <Tweet key={index} tweet={tweet} />;
            })}
        </FeedList>
    );
};
