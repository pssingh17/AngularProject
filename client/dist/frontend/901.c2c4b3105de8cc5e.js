"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[901],{7901:(I,f,a)=>{a.r(f),a.d(f,{UserModule:()=>d});var p=a(6895),u=a(9965),s=a(433),e=a(8256),_=a(5184);function h(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div")(1,"div",12)(2,"div",13),e._uU(3),e.TgZ(4,"button",14),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.navigate())}),e._uU(5,"Close"),e.qZA()()()()}if(2&t){const n=e.oxw();e.xp6(3),e.hij(" ",n.message," ")}}function w(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div")(1,"div",12)(2,"div",15)(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"button",16),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.removeRedAlert())}),e._uU(6,"Close"),e.qZA()()()()}if(2&t){const n=e.oxw();e.xp6(4),e.hij(" ",n.message,"")}}function v(t,i){if(1&t&&(e.TgZ(0,"div",17),e._uU(1," Enter Valid Email "),e.TgZ(2,"p"),e._uU(3),e.ALo(4,"json"),e.qZA()()),2&t){e.oxw();const n=e.MAs(6);e.xp6(3),e.Oqu(e.lcZ(4,1,n.controls.email.errors))}}function C(t,i){if(1&t&&(e.TgZ(0,"div",17),e._uU(1," Password Invalid "),e.TgZ(2,"p"),e._uU(3),e.ALo(4,"json"),e.qZA()()),2&t){e.oxw();const n=e.MAs(6);e.xp6(3),e.Oqu(e.lcZ(4,1,n.controls.password.errors))}}class c{constructor(i,n){this.user=i,this.router=n,this.showAlert=!1,this.showRedAlert=!1,this.loginValidationForm=new s.cw({email:new s.NI("",[s.kI.email,s.kI.required]),password:new s.NI("",[s.kI.required,s.kI.minLength(6)])}),null!=JSON.parse(localStorage.getItem("UserEmail"))&&this.router.navigate(["/"])}login(i){this.user.loginApi(i).subscribe(n=>{var o;console.log("Response from login backend",n),this.loginCredentials=n,null!==(o=this.loginCredentials)&&void 0!==o&&o.token?(localStorage.setItem("LoginToken",JSON.stringify(this.loginCredentials.token)),localStorage.setItem("UserEmail",JSON.stringify(this.loginCredentials.credentials.email)),this.user.isLoggedIn=!0,this.user.UserEmail=this.loginCredentials.credentials.email,this.showRedAlert=!1,this.showAlert=!0,this.message=this.loginCredentials.message):(this.showAlert=!1,this.showRedAlert=!0,this.message=this.loginCredentials.message)})}navigate(){this.router.navigate(["/"])}removeRedAlert(){this.showRedAlert=!1}}function A(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div")(1,"div",17)(2,"div",18),e._uU(3),e.TgZ(4,"button",19),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.navigate())}),e._uU(5,"Close"),e.qZA()()()()}if(2&t){const n=e.oxw();e.xp6(3),e.hij(" ",n.message," ")}}function x(t,i){if(1&t){const n=e.EpF();e.TgZ(0,"div")(1,"div",17)(2,"div",20)(3,"div"),e._uU(4),e.qZA(),e.TgZ(5,"button",21),e.NdJ("click",function(){e.CHM(n);const r=e.oxw();return e.KtG(r.removeRedAlert())}),e._uU(6,"Close"),e.qZA()()()()}if(2&t){const n=e.oxw();e.xp6(4),e.hij(" ",n.message,"")}}function Z(t,i){1&t&&(e.TgZ(0,"span",22),e._uU(1,"Enter Valid Email"),e.qZA())}function b(t,i){1&t&&(e.TgZ(0,"span",22),e._uU(1,"Password must be atleast 6 characters"),e.qZA())}function T(t,i){1&t&&(e.TgZ(0,"span",22),e._uU(1,"Confirm Password must be atleast 6 characters"),e.qZA())}c.\u0275fac=function(i){return new(i||c)(e.Y36(_.Q),e.Y36(u.F0))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-login"]],decls:19,vars:5,consts:[[1,"customContainer"],[4,"ngIf"],[1,"text-center"],["novalidate","",3,"formGroup","ngSubmit"],["userData","ngForm"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","ngModel","","id","exampleInputEmail1","aria-describedby","emailHelp","name","email","formControlName","email",1,"form-control"],["style","color: 'red';",4,"ngIf"],["for","exampleInputPassword1",1,"form-label"],["type","password","ngModel","","id","exampleInputPassword1","name","password","formControlName","password",1,"form-control"],["type","submit",1,"btn","btn-dark"],[1,"d-flex"],["role","alert",1,"alert","alert-primary","d-flex","justify-content-between","w-100","align-items-center"],[1,"btn","btn-primary",3,"click"],["data-dismiss","alert","role","alert",1,"alert","alert-danger","d-flex","justify-content-between","w-100","align-items-center"],[1,"btn","btn-danger",3,"click"],[2,"color","red"]],template:function(i,n){if(1&i){const o=e.EpF();e.TgZ(0,"div",0),e.YNc(1,h,6,1,"div",1),e.YNc(2,w,7,1,"div",1),e.TgZ(3,"h2",2),e._uU(4,"Sign In to Your Account"),e.qZA(),e.TgZ(5,"form",3,4),e.NdJ("ngSubmit",function(){e.CHM(o);const m=e.MAs(6);return e.KtG(n.login(m.value))}),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"Email address"),e.qZA(),e._UZ(10,"input",7),e.YNc(11,v,5,3,"div",8),e.qZA(),e.TgZ(12,"div",5)(13,"label",9),e._uU(14,"Password"),e.qZA(),e._UZ(15,"input",10),e.YNc(16,C,5,3,"div",8),e.qZA(),e.TgZ(17,"button",11),e._uU(18,"Login"),e.qZA()()()}if(2&i){let o,r;e.xp6(1),e.Q6J("ngIf",n.showAlert),e.xp6(1),e.Q6J("ngIf",n.showRedAlert),e.xp6(3),e.Q6J("formGroup",n.loginValidationForm),e.xp6(6),e.Q6J("ngIf",(null==(o=n.loginValidationForm.get("email"))?null:o.invalid)&&n.loginValidationForm.get("email").touched),e.xp6(5),e.Q6J("ngIf",(null==(r=n.loginValidationForm.get("password"))?null:r.invalid)&&n.loginValidationForm.get("password").touched)}},dependencies:[p.O5,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,p.Ts],styles:["@media screen and (min-width:200px){.customContainer[_ngcontent-%COMP%]{margin:2rem;padding:1rem;border-radius:30px}}@media screen and (min-width:550px){.customContainer[_ngcontent-%COMP%]{margin:2rem 5rem;padding:1rem}}@media screen and (min-width:768px){.customContainer[_ngcontent-%COMP%]{margin:3rem 10rem;padding:1rem}}@media screen and (min-width:992px){.customContainer[_ngcontent-%COMP%]{margin:3rem 20rem;padding:1rem}}"]});class g{constructor(i,n){this.user=i,this.router=n,this.showAlert=!1,this.showRedAlert=!1}signUp(i){this.user.signUpApi(i).subscribe(n=>{var o;console.log("Response from signUp backend",n),this.loginCredentials=n,null!==(o=this.loginCredentials)&&void 0!==o&&o.token?(localStorage.setItem("LoginToken",JSON.stringify(this.loginCredentials.token)),localStorage.setItem("UserEmail",JSON.stringify(this.loginCredentials.credentials.email)),this.user.isLoggedIn=!0,this.user.UserEmail=this.loginCredentials.credentials.email,this.showRedAlert=!1,this.showAlert=!0,this.message=this.loginCredentials.message):(this.showAlert=!1,this.showRedAlert=!0,this.message=this.loginCredentials.message)},n=>{var o;console.log("error check",n),this.showAlert=!1,this.showRedAlert=!0,this.message=null===(o=n.error)||void 0===o?void 0:o.text})}navigate(){this.router.navigate(["/"])}removeRedAlert(){this.showRedAlert=!1}}g.\u0275fac=function(i){return new(i||g)(e.Y36(_.Q),e.Y36(u.F0))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-signup"]],decls:27,vars:5,consts:[[1,"customContainer"],[4,"ngIf"],[1,"text-center"],[3,"ngSubmit"],["userData","ngForm"],[1,"mb-3"],["for","exampleInputEmail1",1,"form-label"],["type","email","email","","id","exampleInputEmail1","aria-describedby","emailHelp","ngModel","","name","email","required","",1,"form-control"],["email","ngModel"],["style","color:'red'",4,"ngIf"],["for","exampleInputPassword1",1,"form-label"],["type","password","ngModel","","required","","minlength","6","id","password","name","password",1,"form-control"],["password","ngModel"],["for","exampleInputPassword2",1,"form-label"],["type","password","ngModel","","id","confirmPassword","required","","minlength","6","name","confirmPassword",1,"form-control"],["confirmPassword","ngModel"],["type","submit",1,"btn","btn-dark"],[1,"d-flex"],["role","alert",1,"alert","alert-primary","d-flex","justify-content-between","w-100","align-items-center"],[1,"btn","btn-primary",3,"click"],["data-dismiss","alert","role","alert",1,"alert","alert-danger","d-flex","justify-content-between","w-100","align-items-center"],[1,"btn","btn-danger",3,"click"],[2,"color","red"]],template:function(i,n){if(1&i){const o=e.EpF();e.TgZ(0,"div",0),e.YNc(1,A,6,1,"div",1),e.YNc(2,x,7,1,"div",1),e.TgZ(3,"h2",2),e._uU(4,"SignUp"),e.qZA(),e.TgZ(5,"form",3,4),e.NdJ("ngSubmit",function(){e.CHM(o);const m=e.MAs(6);return e.KtG(n.signUp(m.value))}),e.TgZ(7,"div",5)(8,"label",6),e._uU(9,"Email address"),e.qZA(),e._UZ(10,"input",7,8),e.YNc(12,Z,2,0,"span",9),e.qZA(),e.TgZ(13,"div",5)(14,"label",10),e._uU(15,"Password"),e.qZA(),e._UZ(16,"input",11,12),e.YNc(18,b,2,0,"span",9),e.qZA(),e.TgZ(19,"div",5)(20,"label",13),e._uU(21,"Confirm Password"),e.qZA(),e._UZ(22,"input",14,15),e.YNc(24,T,2,0,"span",9),e.qZA(),e.TgZ(25,"button",16),e._uU(26,"SignUp"),e.qZA()()()}if(2&i){const o=e.MAs(11),r=e.MAs(17),m=e.MAs(23);e.xp6(1),e.Q6J("ngIf",n.showAlert),e.xp6(1),e.Q6J("ngIf",n.showRedAlert),e.xp6(10),e.Q6J("ngIf",o.invalid&&o.touched),e.xp6(6),e.Q6J("ngIf",r.invalid&&r.touched),e.xp6(6),e.Q6J("ngIf",m.invalid&&m.touched)}},dependencies:[p.O5,s._Y,s.Fj,s.JJ,s.JL,s.Q7,s.wO,s.on,s.On,s.F],styles:["@media screen and (min-width:200px){.customContainer[_ngcontent-%COMP%]{margin:2rem;padding:1rem;border-radius:30px}}@media screen and (min-width:550px){.customContainer[_ngcontent-%COMP%]{margin:2rem 5rem;padding:1rem}}@media screen and (min-width:768px){.customContainer[_ngcontent-%COMP%]{margin:3rem 10rem;padding:1rem}}@media screen and (min-width:992px){.customContainer[_ngcontent-%COMP%]{margin:3rem 20rem;padding:1rem}}"]});const U=[{path:"login",component:c},{path:"signup",component:g}];class l{}l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.Bz.forChild(U),u.Bz]}),console.warn("check for lazy loading");class d{}d.\u0275fac=function(i){return new(i||d)},d.\u0275mod=e.oAB({type:d}),d.\u0275inj=e.cJS({imports:[p.ez,l,s.u5,s.UX]})}}]);