/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { StyleSheet } from 'react-native';
import {
  styled,
  StyledComponentProps,
  StyleType,
} from '@kitten/theme';
import {
  Menu,
  MenuElement,
  MenuProps,
} from '../menu/menu.component';
import { MenuItemType } from '../menu/menuItem.component';
import {
  Popover,
  PopoverProps,
} from '../popover/popover.component';
import {
  ModalPresentingBased,
  Omit,
  Override,
} from '../support/typings';

type PopoverContentProps = Omit<PopoverProps, 'content'>;
export type OverflowMenuItemType = Omit<MenuItemType, 'subItems'>;

interface ComponentProps extends PopoverContentProps, ModalPresentingBased {
  children: React.ReactElement<any>;
}

type MenuBasedProps = Override<MenuProps, { data: OverflowMenuItemType[] }>;

export type OverflowMenuProps = & StyledComponentProps & ComponentProps & MenuBasedProps;
export type OverflowMenuElement = React.ReactElement<OverflowMenuProps>;

/**
 * `OverflowMenu` renders vertical list of menu items in a modal.
 *
 * @extends React.Component
 *
 * @property {React.ReactElement<any>} children - Determines the element above
 * which the menu will be rendered.
 *
 * @property {boolean} visible - determines the visibility of the component.
 *
 * @property {OverflowMenuItemType[]} data - Determines menu items.
 *
 * @property {number} selectedIndex - Determines the index of currently selected item.
 *
 * @property {(index: number, event: GestureResponderEvent) => void} onSelect - Fires when selected item is changed.
 *
 * @property Omit<PopoverProps, 'content'>
 *
 * @property Override<MenuProps, { data: OverflowMenuItemType[] }>
 *
 * @property ModalPresentingBased
 *
 * @property StyledComponentProps
 *
 * @overview-example Simple Usage
 *
 * ```
 * import React from 'react';
 * import {
 *   OverflowMenu,
 *   OverflowMenuItemType,
 *   Button,
 * } from 'react-native-ui-kitten';
 *
 * interface State {
 *   menuVisible: boolean;
 *   selectedIndex: number;
 * }
 *
 * export class OverflowMenuShowcase extends React.Component<any, State> {
 *
 *   private data: OverflowMenuItemType[] = [
 *     { title: 'Menu Item 1' },
 *     { title: 'Menu Item 2' },
 *     { title: 'Menu Item 3' },
 *   ];
 *
 *   public state: State = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   private onItemSelect = (selectedIndex: number): void => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   private toggleMenu = (): void => {
 *     const menuVisible: boolean = !this.state.menuVisible;
 *
 *     this.setState({ menuVisible });
 *   };
 *
 *   public render(): React.ReactNode {
 *     return (
 *       <OverflowMenu
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>
 *           TOGGLE MENU
 *         </Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 *
 * @example With Icons
 *
 * ```
 * import React from 'react';
 * import {
 *   Image,
 *   ImageProps,
 * } from 'react-native';
 * import {
 *   OverflowMenu,
 *   OverflowMenuItemType,
 *   Button,
 *   StyleType,
 * } from 'react-native-ui-kitten';
 *
 * interface State {
 *   menuVisible: boolean;
 *   selectedIndex: number;
 * }
 *
 * export class OverflowMenuShowcase extends React.Component<any, State> {
 *
 *   private data: OverflowMenuItemType[] = [
 *     { title: 'Menu Item 1', icon: this.Icon },
 *     { title: 'Menu Item 2', icon: this.Icon },
 *     { title: 'Menu Item 3', icon: this.Icon },
 *   ];
 *
 *   public state: State = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   private Icon = (style: StyleType): React.ReactElement<ImageProps> => (
 *     <Image
 *       style={style}
 *       source={{ uri: 'https://akveo.github.io/eva-icons/fill/png/128/star.png' }}
 *      />
 *   );
 *
 *   private onItemSelect = (selectedIndex: number): void => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   private toggleMenu = (): void => {
 *     const menuVisible: boolean = !this.state.menuVisible;
 *
 *     this.setState({ menuVisible });
 *   };
 *
 *   public render(): React.ReactNode {
 *     return (
 *       <OverflowMenu
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>
 *           TOGGLE MENU
 *         </Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 *
 * @example Disabled Item
 *
 * ```
 * import React from 'react';
 * import {
 *   OverflowMenu,
 *   OverflowMenuItemType,
 *   Button,
 * } from 'react-native-ui-kitten';
 *
 * interface State {
 *   menuVisible: boolean;
 *   selectedIndex: number;
 * }
 *
 * export class OverflowMenuShowcase extends React.Component<any, State> {
 *
 *   private data: OverflowMenuItemType[] = [
 *     { title: 'Menu Item 1' },
 *     { title: 'Menu Item 2', disabled: true },
 *     { title: 'Menu Item 3' },
 *   ];
 *
 *   public state: State = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   private onItemSelect = (selectedIndex: number): void => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   private toggleMenu = (): void => {
 *     const menuVisible: boolean = !this.state.menuVisible;
 *
 *     this.setState({ menuVisible });
 *   };
 *
 *   public render(): React.ReactNode {
 *     return (
 *       <OverflowMenu
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>
 *           TOGGLE MENU
 *         </Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 *
 * @example Without Divider
 *
 * ```
 * import React from 'react';
 * import {
 *   OverflowMenu,
 *   OverflowMenuItemType,
 *   Button,
 * } from 'react-native-ui-kitten';
 *
 * interface State {
 *   menuVisible: boolean;
 *   selectedIndex: number;
 * }
 *
 * export class OverflowMenuShowcase extends React.Component<any, State> {
 *
 *   private data: OverflowMenuItemType[] = [
 *     { title: 'Menu Item 1' },
 *     { title: 'Menu Item 2' },
 *     { title: 'Menu Item 3' },
 *   ];
 *
 *   public state: State = {
 *     menuVisible: false,
 *     selectedIndex: null,
 *   };
 *
 *   private onItemSelect = (selectedIndex: number): void => {
 *     this.setState({ selectedIndex });
 *   };
 *
 *   private toggleMenu = (): void => {
 *     const menuVisible: boolean = !this.state.menuVisible;
 *
 *     this.setState({ menuVisible });
 *   };
 *
 *   public render(): React.ReactNode {
 *     return (
 *       <OverflowMenu
 *         appearance='noDivider'
 *         data={this.data}
 *         visible={this.state.menuVisible}
 *         selectedIndex={this.state.selectedIndex}
 *         onSelect={this.onItemSelect}
 *         onBackdropPress={this.toggleMenu}>
 *         <Button onPress={this.toggleMenu}>
 *           TOGGLE MENU
 *         </Button>
 *       </OverflowMenu>
 *     );
 *   }
 * }
 * ```
 */

class OverflowMenuComponent extends React.Component<OverflowMenuProps> {

  static styledComponentName: string = 'OverflowMenu';

  static defaultProps: Partial<OverflowMenuProps> = {
    indicatorOffset: 12,
  };

  private getComponentStyle = (source: StyleType): StyleType => {
    const {
      indicatorBackgroundColor,
      ...containerParameters
    } = source;

    return {
      container: containerParameters,
      indicator: {
        backgroundColor: indicatorBackgroundColor,
      },
    };
  };

  private renderPopoverContentElement = (style: StyleType): MenuElement => {
    const { themedStyle, indicatorStyle, children, data, ...restProps } = this.props;

    return (
      <Menu
        {...restProps}
        data={data}
        style={[styles.menu, style]}
        initialNumToRender={data.length}
        bounces={false}
      />
    );
  };

  public render(): React.ReactNode {
    const { themedStyle, style, indicatorStyle, children, appearance, ...restProps } = this.props;
    const { container, indicator } = this.getComponentStyle(themedStyle);

    const contentElement: MenuElement = this.renderPopoverContentElement(container);

    return (
      <Popover
        {...restProps}
        style={[styles.container, style]}
        indicatorStyle={[indicator, indicatorStyle]}
        content={contentElement}>
        {children}
      </Popover>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  menu: {
    flexGrow: 0,
  },
});

export const OverflowMenu = styled<OverflowMenuProps>(OverflowMenuComponent);
