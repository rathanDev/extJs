package jana.struts;

import com.opensymphony.xwork2.Action;

public class LoginAction implements Action {

    private String username;
    private String password;

    @Override
    public String execute() throws Exception {
        if ("user".equals(getUsername()) && "password".equals(getPassword())) {
            return Action.SUCCESS;
        }
        return Action.ERROR;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
