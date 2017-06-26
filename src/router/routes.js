import BidderPods from '@/components/Bidders/BidderPods'
import BiddersHome from '@/components/Bidders/BiddersHome'
 import AllBidders from './../components/Bidders/AllBidd'
// import AllBidders from '@/components/Bidders/AllBidders'
import BidderPodCurrentStatus from '@/components/Bidders/BidderPodDetails/BidderPodCurrentStatus'
import BidderPodDetailsHome from '@/components/Bidders/BidderPodDetails/BidderPodDetailsHome'
import BidderPodAllBidders from '@/components/Bidders/BidderPodDetails/BidderPodAllBidders'



export const routes = [
    {
        path : '/',
        redirect: '/bidders',
    },
    {
        path : '/bidders',
        component : BiddersHome,
        redirect : 'bidders/pods',
        children : [
            {
                path : 'pods',
                component : BidderPods,
            },
            {
                path : 'all',
                component : AllBidders,
            },
        ]
            
    },
    {
        path: '/bidders/pods/:podName',
        component: BidderPodDetailsHome,
        redirect: '/bidders/pods/:podName/status',
        props: true,
        children: [
            {
                path: 'status',
                component: BidderPodCurrentStatus,
                props: true,
                BidderPodAllBidders
                // TODO:  remove this if not required. 
                // BidderPodAllBidders
            },
            {
                path: 'all',
                component: BidderPodAllBidders,
                props: true,
            },

        ]
    }
]