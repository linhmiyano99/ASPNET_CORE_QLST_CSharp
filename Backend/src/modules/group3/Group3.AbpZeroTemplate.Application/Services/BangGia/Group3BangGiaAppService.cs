using Abp.Application.Services;
using Group3.AbpZeroTemplate.Application.Share.Group3.Dto;
using GSoft.AbpZeroTemplate.Helpers;
using System.Linq;
using System.Linq.Dynamic.Core;
using System.Collections.Generic;
using GSoft.AbpZeroTemplate.Helpers;
using GSoft.AbpZeroTemplate.Sessions;
using Group3.AbpZeroTemplate.Application.Share.Group3.Dto;
using Microsoft.AspNetCore.Builder;
using Abp.Application.Services;
using Abp.Runtime.Session;
using System.Threading.Tasks;
using GSoft.AbpZeroTemplate.Sessions;
using System.Data;
using System.Data.SqlClient;
using System;

namespace Group3.AbpZeroTemplate.Web.Core.Cars
{
    public interface IGroup3BangGiaAppService: IApplicationService
    {
        IDictionary<string, object> BangGia_Group3Insert(Group3BangGiaDto input);
    }
    public class Group3BangGiaAppService: BaseService, IGroup3BangGiaAppService
    {
        public Group3BangGiaAppService() { }
        static DataTable CreateTable()
        {
            DataTable dt = new DataTable();
            dt.Columns.Add("Gia", typeof(int));
            dt.Columns.Add("ChuThau", typeof(string));
            return dt;
        }
        public IDictionary<string, object> BangGia_Group3Insert(Group3BangGiaDto input)
        {
            DataTable myTable = CreateTable();
            for (int i = 0; i < input.SoLuong; i++)
            {
                myTable.Rows.Add(input.Gia[i], input.ChuThau[i]);
            }
            SqlConnection connection = new SqlConnection("Data Source=DESKTOP-9BIR2H4;Initial Catalog=DbPratice;Integrated Security=True;");
            connection.Open();
            SqlCommand cmd = new SqlCommand("BangGia_Group3Insert", connection);
            cmd.CommandType = CommandType.StoredProcedure;

            //Pass table Valued parameter to Store Procedure
            SqlParameter sqlParam = cmd.Parameters.AddWithValue("@BangTam", myTable);
            sqlParam.SqlDbType = SqlDbType.Structured;
            cmd.ExecuteNonQuery();
            connection.Close();
            Console.Write("Data Save Successfully.");
            return procedureHelper.GetData<dynamic>("BangGia_Group3Insert", input).FirstOrDefault();
        }
    }
}
