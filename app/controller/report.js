/*
 * @Author: yongqing
 * @Date:   2019-07-15 11:19:16
 * @Last Modified by:   yongqing
 * @Last Modified time: 2019-07-15 18:25:21
 */


const Controller = require('egg').Controller;

class ReportController extends Controller {
    async save() {
        const { ctx } = this;
        let {
            title,
            error_message,
            script_uri,
            line_no,
            column_no,
            stack,
            resource_url,
            category,

        } = ctx.request.body;

        const data = {
            title,
            error_message,
            script_uri,
            line_no,
            column_no,
            stack,
            resource_url,
            category,
        }


        const res = await ctx.model.Report.create(data);

        ctx.body = res
    }
}

module.exports = ReportController;