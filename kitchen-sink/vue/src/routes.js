import Index from './pages/index.vue';
import Salon from './pages/salon.vue';
import NoMessages from './pages/no-messages.vue';
import Dialogs from './pages/dialogs.vue';
import UserDialog from './pages/user-dialog.vue';
import Error500 from './pages/500.vue';
import Filters from './pages/filters.vue';
import Searching from './pages/searching.vue';
import SkeletonExample from './pages/skeleton-example.vue';

import Home from './pages/home.vue';
import PanelLeft from './pages/example/panel-left.vue';
import PanelRight from './pages/example/panel-right.vue';
import About from './pages/example/about.vue';

import Accordion from './pages/example/accordion.vue';
import ActionSheet from './pages/example/action-sheet.vue';
import AreaChart from './pages/example/area-chart.vue';
import Autocomplete from './pages/example/autocomplete.vue';
import Badge from './pages/example/badge.vue';
import Breadcrumbs from './pages/example/breadcrumbs.vue';
import Buttons from './pages/example/buttons.vue';
import Calendar from './pages/example/calendar.vue';
import CalendarPage from './pages/example/calendar-page.vue';
import Cards from './pages/example/cards.vue';
import CardsExpandable from './pages/example/cards-expandable.vue';
import Checkbox from './pages/example/checkbox.vue';
import Chips from './pages/example/chips.vue';
import ColorPicker from './pages/example/color-picker.vue';
import ContactsList from './pages/example/contacts-list.vue';
import ContentBlock from './pages/example/content-block.vue';
import DataTable from './pages/example/data-table.vue';
import Dialog from './pages/example/dialog.vue';
import Fab from './pages/example/fab.vue';
import FabMorph from './pages/example/fab-morph.vue';
import FormStorage from './pages/example/form-storage.vue';
import Gauge from './pages/example/gauge.vue';
import Grid from './pages/example/grid.vue';
import Icons from './pages/example/icons.vue';
import InfiniteScroll from './pages/example/infinite-scroll.vue';
import Inputs from './pages/example/inputs.vue';
import ListButton from './pages/example/list-button.vue';
import List from './pages/example/list.vue';
import ListIndex from './pages/example/list-index.vue';
import LoginScreen from './pages/example/login-screen.vue';
import LoginScreenPage from './pages/example/login-screen-page.vue';
import MenuList from './pages/example/menu-list.vue';
import Messages from './pages/example/messages.vue';
import Navbar from './pages/example/navbar.vue';
import NavbarHideScroll from './pages/example/navbar-hide-scroll.vue';
import Notifications from './pages/example/notifications.vue';
import Panel from './pages/example/panel.vue';
import PhotoBrowser from './pages/example/photo-browser.vue';
import Picker from './pages/example/picker.vue';
import PieChart from './pages/example/pie-chart.vue';
import Popup from './pages/example/popup.vue';
import Popover from './pages/example/popover.vue';
import Preloader from './pages/example/preloader.vue';
import Progressbar from './pages/example/progressbar.vue';
import PullToRefresh from './pages/example/pull-to-refresh.vue';
import Radio from './pages/example/radio.vue';
import Range from './pages/example/range.vue';
import Searchbar from './pages/example/searchbar.vue';
import SearchbarExpandable from './pages/example/searchbar-expandable.vue';
import Segmented from './pages/example/segmented.vue';
import SheetModal from './pages/example/sheet-modal.vue';
import Skeleton from './pages/example/skeleton.vue';
import SmartSelect from './pages/example/smart-select.vue';
import Sortable from './pages/example/sortable.vue';
import Stepper from './pages/example/stepper.vue';
import Subnavbar from './pages/example/subnavbar.vue';
import SubnavbarTitle from './pages/example/subnavbar-title.vue';
import Swiper from './pages/example/swiper.vue';
import SwiperHorizontal from './pages/example/swiper-horizontal.vue';
import SwiperVertical from './pages/example/swiper-vertical.vue';
import SwiperSpaceBetween from './pages/example/swiper-space-between.vue';
import SwiperMultiple from './pages/example/swiper-multiple.vue';
import SwiperNested from './pages/example/swiper-nested.vue';
import SwiperLoop from './pages/example/swiper-loop.vue';
import Swiper3dCube from './pages/example/swiper-3d-cube.vue';
import Swiper3dCoverflow from './pages/example/swiper-3d-coverflow.vue';
import Swiper3dFlip from './pages/example/swiper-3d-flip.vue';
import SwiperFade from './pages/example/swiper-fade.vue';
import SwiperScrollbar from './pages/example/swiper-scrollbar.vue';
import SwiperGallery from './pages/example/swiper-gallery.vue';
import SwiperParallax from './pages/example/swiper-parallax.vue';
import SwiperLazy from './pages/example/swiper-lazy.vue';
import SwiperPaginationProgress from './pages/example/swiper-pagination-progress.vue';
import SwiperPaginationFraction from './pages/example/swiper-pagination-fraction.vue';
import SwiperZoom from './pages/example/swiper-zoom.vue';
import Swipeout from './pages/example/swipeout.vue';
import Tabs from './pages/example/tabs.vue';
import TabsStatic from './pages/example/tabs-static.vue';
import TabsAnimated from './pages/example/tabs-animated.vue';
import TabsSwipeable from './pages/example/tabs-swipeable.vue';
import TabsRoutable from './pages/example/tabs-routable.vue';
import TextEditor from './pages/example/text-editor.vue';
import Toast from './pages/example/toast.vue';
import Toggle from './pages/example/toggle.vue';
import ToolbarTabbar from './pages/example/toolbar-tabbar.vue';
import Tabbar from './pages/example/tabbar.vue';
import TabbarIcons from './pages/example/tabbar-icons.vue';
import TabbarScrollable from './pages/example/tabbar-scrollable.vue';
import ToolbarHideScroll from './pages/example/toolbar-hide-scroll.vue';
import Tooltip from './pages/example/tooltip.vue';
import Timeline from './pages/example/timeline.vue';
import TimelineVertical from './pages/example/timeline-vertical.vue';
import TimelineHorizontal from './pages/example/timeline-horizontal.vue';
import TimelineHorizontalCalendar from './pages/example/timeline-horizontal-calendar.vue';
import Treeview from './pages/example/treeview.vue';
import VirtualList from './pages/example/virtual-list.vue';
import ColorThemes from './pages/example/color-themes.vue';

import PageTransitions from './pages/example/page-transitions.vue';
import PageTransitionsEffect from './pages/example/page-transitions-effect.vue';

import RoutableModals from './pages/example/routable-modals.vue';
import RoutablePopup from './pages/example/routable-popup.vue';
import RoutableActions from './pages/example/routable-actions.vue';

import MasterDetailMaster from './pages/example/master-detail-master.vue';
import MasterDetailDetail from './pages/example/master-detail-detail.vue';

import Store from './pages/example/store.vue';

import NotFound from './pages/example/404.vue';

// Pages
export default [
  // Index page
  {
    path: '/index/',
    component: Index,
  },
  {
    path: '/salon/',
    component: Salon,
  },
  {
    path: '/no-messages/',
    component: NoMessages,
  },
  {
    path: '/dialogs/',
    component: Dialogs,
  },
  {
    path: '/dialog/:id/',
    component: UserDialog,
  },
  {
    path: '/500/',
    component: Error500,
  },
  {
    path: '/filters/',
    component: Filters,
  },
  {
    path: '/searching/',
    component: Searching,
  },
  {
    path: '/skeleton-example/',
    component: SkeletonExample,
  },
  {
    path: '/',
    component: Home,
  },
  // About page
  {
    path: '/about/',
    component: About,
  },
  // Left Panel
  {
    path: '/panel-left/',
    component: PanelLeft,
  },
  // Right Panel
  {
    path: '/panel-right/',
    component: PanelRight,
  },
  // Right Panel pages
  {
    path: '/panel-right-1/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a  class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 1</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 1</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },
  {
    path: '/panel-right-2/',
    content: `
      <div class="page">
        <div class="navbar">
          <div class="navbar-bg"></div>
          <div class="navbar-inner sliding">
            <div class="left">
              <a  class="link back">
                <i class="icon icon-back"></i>
                <span class="if-not-md">Back</span>
              </a>
            </div>
            <div class="title">Panel Page 2</div>
          </div>
        </div>
        <div class="page-content">
          <div class="block">
            <p>This is a right panel page 2</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo saepe aspernatur inventore dolorum voluptates consequatur tempore ipsum! Quia, incidunt, aliquam sit veritatis nisi aliquid porro similique ipsa mollitia eaque ex!</p>
          </div>
        </div>
      </div>
    `,
  },

  // Components
  {
    path: '/accordion/',
    component: Accordion,
  },
  {
    path: '/action-sheet/',
    component: ActionSheet,
  },
  {
    path: '/area-chart/',
    component: AreaChart,
  },
  {
    path: '/autocomplete/',
    component: Autocomplete,
  },
  {
    path: '/badge/',
    component: Badge,
  },
  {
    path: '/breadcrumbs/',
    component: Breadcrumbs,
  },
  {
    path: '/buttons/',
    component: Buttons,
  },
  {
    path: '/calendar/',
    component: Calendar,
  },
  {
    path: '/calendar-page/',
    component: CalendarPage,
  },
  {
    path: '/cards/',
    component: Cards,
  },
  {
    path: '/cards-expandable/',
    component: CardsExpandable,
  },
  {
    path: '/checkbox/',
    component: Checkbox,
  },
  {
    path: '/chips/',
    component: Chips,
  },
  {
    path: '/color-picker/',
    component: ColorPicker,
  },
  {
    path: '/contacts-list/',
    component: ContactsList,
  },
  {
    path: '/content-block/',
    component: ContentBlock,
  },
  {
    path: '/data-table/',
    component: DataTable,
  },
  {
    path: '/dialog/',
    component: Dialog,
  },
  {
    path: '/fab/',
    component: Fab,
  },
  {
    path: '/fab-morph/',
    component: FabMorph,
  },
  {
    path: '/form-storage/',
    component: FormStorage,
  },
  {
    path: '/gauge/',
    component: Gauge,
  },
  {
    path: '/grid/',
    component: Grid,
  },
  {
    path: '/icons/',
    component: Icons,
  },
  {
    path: '/infinite-scroll/',
    component: InfiniteScroll,
  },
  {
    path: '/inputs/',
    component: Inputs,
  },
  {
    path: '/list-button/',
    component: ListButton,
  },
  {
    path: '/list/',
    component: List,
  },
  {
    path: '/list-index/',
    component: ListIndex,
  },
  {
    path: '/login-screen/',
    component: LoginScreen,
  },
  {
    path: '/login-screen-page/',
    component: LoginScreenPage,
  },
  {
    path: '/menu-list/',
    component: MenuList,
  },
  {
    path: '/messages/',
    component: Messages,
  },
  {
    path: '/navbar/',
    component: Navbar,
  },
  {
    path: '/navbar-hide-scroll/',
    component: NavbarHideScroll,
  },
  {
    path: '/notifications/',
    component: Notifications,
  },
  {
    path: '/panel/',
    component: Panel,
  },
  {
    path: '/photo-browser/',
    component: PhotoBrowser,
  },
  {
    path: '/picker/',
    component: Picker,
  },
  {
    path: '/pie-chart/',
    component: PieChart,
  },
  {
    path: '/popup/',
    component: Popup,
  },
  {
    path: '/popover/',
    component: Popover,
  },
  {
    path: '/preloader/',
    component: Preloader,
  },
  {
    path: '/progressbar/',
    component: Progressbar,
  },
  {
    path: '/pull-to-refresh/',
    component: PullToRefresh,
  },
  {
    path: '/radio/',
    component: Radio,
  },
  {
    path: '/range/',
    component: Range,
  },
  {
    path: '/searchbar/',
    component: Searchbar,
  },
  {
    path: '/searchbar-expandable/',
    component: SearchbarExpandable,
  },
  {
    path: '/segmented/',
    component: Segmented,
  },
  {
    path: '/sheet-modal/',
    component: SheetModal,
  },
  {
    path: '/skeleton/',
    component: Skeleton,
  },
  {
    path: '/smart-select/',
    component: SmartSelect,
  },
  {
    path: '/sortable/',
    component: Sortable,
  },
  {
    path: '/stepper/',
    component: Stepper,
  },
  {
    path: '/subnavbar/',
    component: Subnavbar,
  },
  {
    path: '/subnavbar-title/',
    component: SubnavbarTitle,
  },
  {
    path: '/swiper/',
    component: Swiper,
    routes: [
      {
        path: 'swiper-horizontal/',
        component: SwiperHorizontal,
      },
      {
        path: 'swiper-vertical/',
        component: SwiperVertical,
      },
      {
        path: 'swiper-space-between/',
        component: SwiperSpaceBetween,
      },
      {
        path: 'swiper-multiple/',
        component: SwiperMultiple,
      },
      {
        path: 'swiper-nested/',
        component: SwiperNested,
      },
      {
        path: 'swiper-loop/',
        component: SwiperLoop,
      },
      {
        path: 'swiper-3d-cube/',
        component: Swiper3dCube,
      },
      {
        path: 'swiper-3d-coverflow/',
        component: Swiper3dCoverflow,
      },
      {
        path: 'swiper-3d-flip/',
        component: Swiper3dFlip,
      },
      {
        path: 'swiper-fade/',
        component: SwiperFade,
      },
      {
        path: 'swiper-scrollbar/',
        component: SwiperScrollbar,
      },
      {
        path: 'swiper-gallery/',
        component: SwiperGallery,
      },
      {
        path: 'swiper-parallax/',
        component: SwiperParallax,
      },
      {
        path: 'swiper-lazy/',
        component: SwiperLazy,
      },
      {
        path: 'swiper-pagination-progress/',
        component: SwiperPaginationProgress,
      },
      {
        path: 'swiper-pagination-fraction/',
        component: SwiperPaginationFraction,
      },
      {
        path: 'swiper-zoom/',
        component: SwiperZoom,
      },
    ],
  },
  {
    path: '/swipeout/',
    component: Swipeout,
  },
  {
    path: '/tabs/',
    component: Tabs,
  },
  {
    path: '/tabs-static/',
    component: TabsStatic,
  },
  {
    path: '/tabs-animated/',
    component: TabsAnimated,
  },
  {
    path: '/tabs-swipeable/',
    component: TabsSwipeable,
  },
  {
    path: '/tabs-routable/',
    component: TabsRoutable,
    tabs: [
      {
        path: '/',
        id: 'tab1',
        content: `
        <div class="block">
          <p>Tab 1 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Saepe explicabo voluptas ducimus provident, doloremque quo totam molestias! Suscipit blanditiis eaque exercitationem praesentium reprehenderit, fuga accusamus possimus sed, sint facilis ratione quod, qui dignissimos voluptas! Aliquam rerum consequuntur deleniti.</p>
          <p>Totam reprehenderit amet commodi ipsum nam provident doloremque possimus odio itaque, est animi culpa modi consequatur reiciendis corporis libero laudantium sed eveniet unde delectus a maiores nihil dolores? Natus, perferendis.</p>
        </div>
        `,
      },
      {
        path: '/tab2/',
        id: 'tab2',
        content: `
        <div class="block">
          <p>Tab 2 content</p>
          <p>Suscipit, facere quasi atque totam. Repudiandae facilis at optio atque, rem nam, natus ratione cum enim voluptatem suscipit veniam! Repellat, est debitis. Modi nam mollitia explicabo, unde aliquid impedit! Adipisci!</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
      },
      {
        path: '/tab3/',
        id: 'tab3',
        content: `
        <div class="block">
          <p>Tab 3 content</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam enim quia molestiae facilis laudantium voluptates obcaecati officia cum, sit libero commodi. Ratione illo suscipit temporibus sequi iure ad laboriosam accusamus?</p>
          <p>Deserunt adipisci tempora asperiores, quo, nisi ex delectus vitae consectetur iste fugiat iusto dolorem autem. Itaque, ipsa voluptas, a assumenda rem, dolorum porro accusantium, officiis veniam nostrum cum cumque impedit.</p>
          <p>Laborum illum ipsa voluptatibus possimus nesciunt ex consequatur rem, natus ad praesentium rerum libero consectetur temporibus cupiditate atque aspernatur, eaque provident eligendi quaerat ea soluta doloremque. Iure fugit, minima facere.</p>
        </div>
        `,
      },
    ],
  },
  {
    path: '/text-editor/',
    component: TextEditor,
  },
  {
    path: '/toast/',
    component: Toast,
  },
  {
    path: '/toggle/',
    component: Toggle,
  },
  {
    path: '/toolbar-tabbar/',
    component: ToolbarTabbar,
    routes: [
      {
        path: 'tabbar/',
        component: Tabbar,
      },
      {
        path: 'tabbar-icons/',
        component: TabbarIcons,
      },
      {
        path: 'tabbar-scrollable/',
        component: TabbarScrollable,
      },
      {
        path: 'toolbar-hide-scroll/',
        component: ToolbarHideScroll,
      },
    ],
  },
  {
    path: '/tooltip/',
    component: Tooltip,
  },
  {
    path: '/timeline/',
    component: Timeline,
  },
  {
    path: '/timeline-vertical/',
    component: TimelineVertical,
  },
  {
    path: '/timeline-horizontal/',
    component: TimelineHorizontal,
  },
  {
    path: '/timeline-horizontal-calendar/',
    component: TimelineHorizontalCalendar,
  },
  {
    path: '/treeview/',
    component: Treeview,
  },
  {
    path: '/virtual-list/',
    component: VirtualList,
  },

  // Color Themes
  {
    path: '/color-themes/',
    component: ColorThemes,
  },

  // Page Transitions
  {
    path: '/page-transitions/',
    component: PageTransitions,
  },
  {
    path: '/page-transitions/:effect/',
    component: PageTransitionsEffect,
  },

  // Routable Modals
  {
    path: '/routable-modals/',
    component: RoutableModals,
    routes: [
      {
        path: 'popup/',
        popup: {
          component: RoutablePopup,
        },
      },
      {
        path: 'actions/',
        popup: {
          component: RoutableActions,
        },
      },
    ],
  },
  {
    path: '/master-detail/',
    component: MasterDetailMaster,
    master: true,
    detailRoutes: [
      {
        path: '/master-detail/:id/',
        component: MasterDetailDetail,
      },
    ],
  },
  {
    path: '/store/',
    component: Store,
  },

  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    component: NotFound,
  },
];
