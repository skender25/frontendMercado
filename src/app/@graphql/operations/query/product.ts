import gql from 'graphql-tag';
import { PRODUCT_FRAGMENT } from '@graphql/operations/fragment/product';
import { RESULT_INFO_FRAGMENT } from '@graphql/operations/fragment/result-info';

export const PRODUCT_LIST_QUERY = gql`
    query productsList($page: Int, $itemsPage: Int) {
        products(page: $page, itemsPage: $itemsPage) {
            info {
                ...ResultInfoObject
            }
            status
            message
            products {
                ...ProductObject
            }
        }
    }
    ${PRODUCT_FRAGMENT}
    ${RESULT_INFO_FRAGMENT}
`;
