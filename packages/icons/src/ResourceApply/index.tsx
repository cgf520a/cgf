import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M867.3 519.9c-4.4-4.5-10.2-6.9-16.6-6.9-6.2 0-12.2 2.6-16.6 6.9l-42.4 42.4 89.4 89.3 39.9-45c4.5-4.4 6.9-10.4 6.9-16.5 0-6.2-2.6-12.2-6.9-16.5l-53.7-53.7zM575 425.4H317c-28.3 0-51.2-22.9-51.2-51.1 0-28.3 22.9-51.1 51.2-51.1h258c28.3 0 51.2 22.9 51.2 51.1 0 28.3-22.9 51.1-51.2 51.1zM471.3 631H317c-28.3 0-51.2-22.9-51.2-51.1 0-28.3 22.9-51.1 51.2-51.1h154.3c28.3 0 51.2 22.9 51.2 51.1 0 28.3-22.9 51.1-51.2 51.1zM692.7 88.2H220.6c-68.6 0-124.3 55.6-124.3 124.2v599.7c0 68.6 55.7 124.2 124.3 124.2h171.7V825l424.8-434.2V212.5c0-68.6-55.7-124.3-124.4-124.3zM504.4 847v89.3H594l258.9-261.4-89.4-89.5L504.4 847z"
      fill="currentColor"
      p-id="54495"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
