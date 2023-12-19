"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const formik_1 = require("formik");
const Yup = __importStar(require("yup"));
const styled_components_1 = __importDefault(require("styled-components"));
// Styled components with implicit naming
const Form = styled_components_1.default.form `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
`;
const Input = (0, styled_components_1.default)(formik_1.Field) `
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
`;
const ErrorText = styled_components_1.default.div `
  color: red;
  font-size: 0.8rem;
  width: 100%;
  text-alrign: left;
`;
const Button = styled_components_1.default.button `
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:disabled {
    background-color: #ccc;
  }
`;
const SignupForm = () => {
    // Schema for form validation using Yup
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email')
            .required('Required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required')
    });
    const handleSubmit = (values, { setSubmitting }) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            console.log('values', values);
            // Post the data to the API endpoint using async/await
            const response = yield fetch('http://localhost:3005/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            });
            // Convert the response to JSON
            const data = yield response.json();
            console.log('Success:', data);
        }
        catch (error) {
            console.error('Error:', error);
        }
        setSubmitting(false);
    });
    return (<formik_1.Formik initialValues={{ name: '', email: '', password: '' }} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (<formik_1.Form>
          fooo
          <Input type="text" name="name" placeholder="Name"/>
          <formik_1.ErrorMessage name="name" component={ErrorText}/>

          <Input type="email" name="email" placeholder="Email"/>
          <formik_1.ErrorMessage name="email" component={ErrorText}/>

          <Input type="password" name="password" placeholder="Password"/>
          <formik_1.ErrorMessage name="password" component={ErrorText}/>

          <Button type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </formik_1.Form>)}
    </formik_1.Formik>);
};
exports.default = SignupForm;
