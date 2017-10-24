package jana.struts;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;

public class LoginAction extends ActionSupport implements ModelDriven<LoginModel> {

    LoginModel loginModel = new LoginModel();

    public String login() {
        System.out.println("Login");
        loginModel.setSuccess(true);
        loginModel.setStatus("OK");
        return Action.SUCCESS;
    }

    @Override
    public LoginModel getModel() {
        return this.loginModel;
    }

}
