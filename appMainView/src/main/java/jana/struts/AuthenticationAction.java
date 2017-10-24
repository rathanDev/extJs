package jana.struts;

import com.opensymphony.xwork2.Action;
import com.opensymphony.xwork2.ActionSupport;
import com.opensymphony.xwork2.ModelDriven;
import org.apache.struts2.interceptor.SessionAware;

import java.util.Map;

public class AuthenticationAction extends ActionSupport implements ModelDriven<AuthenticationModel>, SessionAware {

    private Map<String, Object> sessionMap;
    private AuthenticationModel authenticationModel = new AuthenticationModel();

    public String login() {
        if(authenticationModel.getUsername().equals("user") && authenticationModel.getPassword().equals("password")) {
            sessionMap.put("username", authenticationModel.getUsername());

            authenticationModel.setSuccess(true);
            authenticationModel.setStatus("OK");
            return Action.SUCCESS;
        }
        return Action.INPUT;
    }

    @Override
    public AuthenticationModel getModel() {
        return this.authenticationModel;
    }

    @Override
    public void setSession(Map<String, Object> map) {
        this.sessionMap = map;
    }

}
