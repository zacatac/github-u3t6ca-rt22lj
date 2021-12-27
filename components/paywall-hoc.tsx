import PropTypes from 'prop-types';
import { Component } from 'react';
import React from 'react';

/**
 * Higher-order component that passes state and props into a predicate that
 * checks whether the current user has permission to view the page due to paywall restrictions.
 *
 * If the predicate function returns true, the component is rendered.
 * Otherwise, a error is rendered.
 *
 * @param {Function} predicate - The paywall predicate function
 */

type PaywallProps = {
  hasPermission: () => boolean;
};

type PaywallState = {
  hasPermission: () => boolean;
};

export default function withPaywall(predicate: any) {
  return (Component: React.ComponentType) => {
    class WithPaywallHOC extends React.Component<PaywallProps, PaywallState> {
      static propTypes = {
        // connect

        /**
         * Whether the user has permission to access this page.
         */
        hasPermission: PropTypes.bool.isRequired,
      };

      render() {
        const { hasPermission } = this.props;

        if (!hasPermission) {
          return <div>You must be logged in to continue!</div>;
        }

        return <Component {...this.props} />;
      }
    }

    return WithPaywallHOC;
  };
}
