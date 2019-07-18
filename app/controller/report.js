/*
 * @Author: yongqing
 * @Date:   2019-07-15 11:19:16
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-07-16 18:37:30
 */


const Controller = require('egg').Controller;

class ReportController extends Controller {
    async save() {
        const { ctx } = this;

        let {
            name,
            type,
            title,
            message,
            script_uri,
            line_no,
            column_no,
            stack,
            resource_url,
            category,
            referrer,
            origin,
            mobile,
            userAgent,
            os,
            version,
            cookies,
            winWith,
            windHeight,
            language,
            cid,
            cip,
            cname,
            time,
            env,
            response,
            request,


        } = ctx.request.body;

        const data = {
            name,
            type,
            title,
            message,
            script_uri,
            line_no,
            column_no,
            stack,
            resource_url,
            category,
            referrer,
            origin,
            mobile,
            user_agent: userAgent,
            os,
            version,
            cookies,
            win_with: winWith,
            wind_height: windHeight,
            language,
            cid,
            cip,
            cname,
            time,
            env,
            response: JSON.stringify(response),
            request: JSON.stringify(request),
            status: 0
        }


        const res = await ctx.model.Report.create(data);

        ctx.body = res
    }
}

module.exports = ReportController;