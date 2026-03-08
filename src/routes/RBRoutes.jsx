import { createBrowserRouter} from "react-router-dom";
import RBLayout from "../layout/RBLayout";

import RBHome from "../pages/RBHome";
import RBBadges from "../pages/RBBadges";
import RBBreadcrumbs from "../pages/RBBreadcrumbs";
import RBButtons from "../pages/RBButtons";
import RBButtonGroups from "../pages/RBButtonGroups";
import RBCards from "../pages/RBCards";
import RBImages from "../pages/RBImages";
import RBListGroup from "../pages/RBListGroup";
import RBFigure from "../pages/RBFigure";
import RBPagination from "../pages/RBPagination";

import RBPrgressBars from "../pages/RBPrgressBars";
import RBSpinners from "../pages/RBSpinners";
import RBTables from "../pages/RBTables";

import RBAccordion from "../pages/RBAccordion";
import RBCarousel from "../pages/RBCarousel";
import RBDropdowns from "../pages/RBDropdowns";
import RBModal from "../pages/RBModal";
import RBNavbarOffcanvas from "../pages/RBNavbarOffcanvas";
import RBNavTabs from "../pages/RBNavTabs";
import RBOverlays from "../pages/RBOverlays";


import RBForms from "../pages/RBForms";

import FormControls from "../forms/FormControls";
import SIPCalculator from "../forms/SIPCalculator";
import BasicFormValidation from "../forms/BasicFormValidation";


import ReactHookForm from "../forms/ReactHookForm";
import RHFForm from "../forms/RHFForm";
import RHFFormYup from "../forms/RHFFormYup";
import FormikFormValidationYup from "../forms/FormikFormValidationYup";
import RHFValidation from "../forms/RHFValidation";
import RHFValidationYup from "../forms/RHFValidationYup";


export const router = createBrowserRouter(
    [
        {
            element: <RBLayout />,
            children: [
                { path: "/", element:<RBHome />},
                { path: "rb-badges", element:<RBBadges />},
                { path: "rb-breadcrumb", element:<RBBreadcrumbs />},
                { path: "rb-buttons", element:<RBButtons />},
                { path: "rb-buttongroup", element:<RBButtonGroups />},
                { path: "rb-cards", element:<RBCards />},
                { path: "rb-images", element:<RBImages />},
                { path: "rb-listroup", element:<RBListGroup />},
                { path: "rb-figure", element:<RBFigure />},

                { path: "rb-pagination", element:<RBPagination />},
                { path: "rb-progress-bar", element:<RBPrgressBars />},
                { path: "rb-spinners", element:<RBSpinners />},
                { path: "rb-tables", element:<RBTables />},

                { path: "rb-accordion", element:<RBAccordion />},
                { path: "rb-carousel", element:<RBCarousel />},
                { path: "rb-dropdowns", element:<RBDropdowns />},
                { path: "rb-modal", element:<RBModal />},
                { path: "rb-navbar-offcanvas", element:<RBNavbarOffcanvas />},
                { path: "rb-nav-tabs", element:<RBNavTabs />},
                { path: "rb-overlays", element:<RBOverlays />},

                { path: "rb-forms", element:<RBForms />},
                { path: "form-controls", element:<FormControls />},
                { path: "sip-calculator", element:<SIPCalculator />},
                { path: "basic-form-validation", element:<BasicFormValidation />},


                { path: "react-hook-form", element:<ReactHookForm />},
                { path: "hook-form", element:<RHFForm />},
                { path: "hook-form-yup", element:<RHFFormYup />},
                { path: "formik-form", element:<FormikFormValidationYup />},
                { path: "react-form-validation", element:<RHFValidation />},
                { path: "react-form-validation-yup", element:<RHFValidationYup />}


            ]
        }
    ]
)

