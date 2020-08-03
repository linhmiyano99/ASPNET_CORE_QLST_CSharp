import { Component, OnInit, Injector, ViewChild } from "@angular/core";
import { AppComponentBase } from "@shared/common/app-component-base";
import {
  Group6XeServiceProxy,
  Group4LoaiXeServiceProxy,
  Group4LoaiXeDto,
  Group6XeDto,
} from "@shared/service-proxies/service-proxies";
import { DatePipe } from "@angular/common";
import { environment } from "environments/environment";

enum stateCar {
  N = "normal",
  X = "delete",
  B = "baohanh",
}

@Component({
  selector: "app-dashboard-group5-group6",
  templateUrl: "./dashboard-group5-group6.component.html",
  styleUrls: ["./dashboard-group5-group6.component.css"],
})
export class DashboardGroup5Group6Component extends AppComponentBase
  implements OnInit {
  canvasChart1: any;
  datePipe = new DatePipe("en-UTC");
  ctxChart1: any;
  canvasChart2: any;
  ctxChart2: any;
  canvasChart3: any;
  ctxChart3: any;

  startDate: Date;
  endDate: Date;
  loading: boolean;

  listColor: Array<string> = [];
  listDataLabel: Array<string> = [];
  listData: Array<object> = [];

  cars: Group6XeDto[] = [];
  modalCars: Group4LoaiXeDto[] = [];

  listLabel1: Array<string> = [];
  listData1: Array<number> = [];

  listLabel2: Array<string> = [];
  listData2: Array<number> = [];

  listLabelBar: Array<string> = [];
  listMoney: Array<number> = [];
  listData3: Array<object> = [];
  listDataLine: Array<number> = [];
  listDataBar: Array<object> = [];

  @ViewChild("chart1") chart1;
  @ViewChild("chart2") chart2;
  @ViewChild("chart3") chart3;

  constructor(
    injector: Injector,
    private group6: Group6XeServiceProxy,
    private group4: Group4LoaiXeServiceProxy
  ) {
    super(injector);
  }

  ngOnInit() {
    this.loading = false;
    console.log(this.setListColor(10));
  }

  ngAfterViewInit() {
    this.getData();
  }

  getData() {
    this.getCars();
    this.getModelCars();
  }

  getCars() {
    const firstDate = this.startDate
      ? this.datePipe.transform(this.startDate, "MM/dd/yyyy").toString()
      : "";
    const secondDate = this.endDate
      ? this.datePipe.transform(this.endDate, "MM/dd/yyyy").toString()
      : "";

    this.group6
      .xe_Group6_SearchByDay(firstDate, secondDate)
      .subscribe((response) => {
        if (response["Result"] === "1") {
        } else {
          this.cars = response;
        }
      });
  }

  getModelCars() {
    let carModel: Group4LoaiXeDto = new Group4LoaiXeDto();

    this.group4.lOAIXE_Group4Search(carModel).subscribe((response) => {
      if (response["Result"] === "1") {
      } else {
        this.modalCars = response;

        this.handleData();
      }
    });
  }

  handleData() {
    this.listData1 = [];
    this.listLabel1 = [];
    this.listData2 = [];
    this.listLabel2 = [];

    this.modalCars.forEach((item) => {
      this.listLabel1.push(item.loaiXe_Ten);
      this.listData1.push(this.countCarByModelCar(item.ma));
    });

    this.modalCars.forEach((item) => {
      this.listLabel2.push(item.loaiXe_Ten);
      this.listData2.push(this.totalPriceCarByModelCar(item.ma));
    });

    this.createChart1();
    this.createChart2();

    this.handleDataChart3();
  }

  handleDataChart3() {
    this.listLabelBar = [];
    this.listDataLine = [];
    this.listData3 = [];

    this.listLabelBar = this.getByDay();

    this.listLabelBar.forEach((item) => {
      let price = 0;

      this.cars.forEach((car) => {
        let moment = car.xe_NgayTao.toDate();
        let date = this.datePipe.transform(moment, "dd/MM/yyyy");

        if (item === date) {
          price += car.xe_Gia;
        }
      });

      this.listDataLine.push(price);
    });

    let color = this.randomColor();

    let dataLine = {
      label: "Tổng tiền",
      data: this.listDataLine,
      type: "line",
      borderColor: color,
      backgroundColor: color,
      fill: false,
      yAxisID: "B",
    };

    this.listData3.push(dataLine);

    this.modalCars.forEach((modal) => {
      let list = [];

      this.listLabelBar.forEach((item) => {
        let count = 0;

        this.cars.forEach((car) => {
          let moment = car.xe_NgayTao.toDate();
          let date = this.datePipe.transform(moment, "dd/MM/yyyy");

          if (item === date) {
            if (car.xe_MaLoaiXe === modal.ma) {
              count++;
            }
          }
        });

        list.push(count);
      });

      let color1 = this.randomColor();

      let dataBar = {
        label: modal.loaiXe_Ten,
        data: list,
        borderColor: color1,
        borderWidth: 1,
        backgroundColor: color1,
        yAxisID: "A",
      };

      this.listData3.push(dataBar);
    });

    this.createChart3();
  }

  getByDay() {
    let list = [];

    this.cars.forEach((item) => {
      let moment = item.xe_NgayTao.toDate();
      let date = this.datePipe.transform(moment, "dd/MM/yyyy");

      let index = list.findIndex((x) => x === date);

      if (index < 0) {
        list.push(date);
      }
    });

    return list;
  }

  getByMonth() {
    let list = [];

    this.cars.forEach((item) => {
      let moment = item.xe_NgayTao.toDate();
      let date = this.datePipe.transform(moment, "MM/yyyy");

      list.push(date);
    });

    return list;
  }

  getByYear() {
    let list = [];

    this.cars.forEach((item) => {
      let moment = item.xe_NgayTao.toDate();
      let date = this.datePipe.transform(moment, "yyyy");

      list.push(date);
    });

    return list;
  }

  randomColor() {
    let str = "abcdef0123456789";

    let arrStr = str.split("");

    let color = "";

    for (let index = 0; index < 6; index++) {
      let rand = Math.floor(Math.random() * arrStr.length);

      color += arrStr[rand];
    }

    return "#" + color;
  }

  countCarByModelCar(id) {
    let count = 0;

    this.cars.forEach((item) => {
      if (item.xe_MaLoaiXe === id) {
        count++;
      }
    });

    return count;
  }

  totalPriceCarByModelCar(id) {
    let price = 0;

    this.cars.forEach((item) => {
      if (item.xe_MaLoaiXe === id) {
        price += item.xe_Gia;
      }
    });

    return price;
  }

  setListColor(num) {
    const list = [];

    for (let index = 0; index < num; index++) {
      list.push(this.randomColor());
    }

    return list;
  }

  createChart1() {
    this.canvasChart1 = this.chart1.nativeElement;
    this.ctxChart1 = this.canvasChart1.getContext("2d");
    let chart1 = new Chart(this.ctxChart1, {
      type: "pie",
      data: {
        labels: this.listLabel1,
        datasets: [
          {
            data: this.listData1,
            backgroundColor: this.setListColor(this.listLabel1.length),
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Biểu đố thống kế số lượng của các loại xe",
        },
        legend: {
          display: true,
          position: "bottom",
        },
      },
    });
  }

  createChart2() {
    this.canvasChart2 = this.chart2.nativeElement;
    this.ctxChart2 = this.canvasChart2.getContext("2d");
    let chart2 = new Chart(this.ctxChart2, {
      type: "doughnut",
      data: {
        labels: this.listLabel2,
        datasets: [
          {
            data: this.listData2,
            backgroundColor: this.setListColor(this.listLabel2.length),
            fill: false,
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Biểu đố thống kế tổng tiền của các loại xe",
        },
        legend: {
          display: true,
          position: "bottom",
        },
      },
    });
  }

  createChart3() {
    this.canvasChart3 = this.chart3.nativeElement;
    this.ctxChart3 = this.canvasChart3.getContext("2d");
    let chart3 = new Chart(this.ctxChart3, {
      type: "bar",

      data: {
        labels: this.listLabelBar,
        datasets: this.listData3,
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Biều đồ thể hiện số lượng xe được nhập và tổng số tiền",
        },
        legend: {
          display: true,
          position: "bottom",
        },
        scales: {
          yAxes: [
            {
              id: "A",
              type: "linear",
              position: "left",
            },
            {
              id: "B",
              type: "linear",
              position: "right",
            },
          ],
        },
      },
    });
  }

  getDashboardStatisticsData() {
    let check = this.startDate > this.endDate ? true : false;

    if (check) {
      this.notify.error(
        "Ngày bắt đầu không thể lớn hơn ngày kết thúc.",
        "ERROR",
        environment.opt
      );

      return;
    }

    if (!this.startDate && this.endDate) {
      this.notify.error(
        "Vui lòng nhập ngày bắt đầu.",
        "ERROR",
        environment.opt
      );

      return;
    }

    this.getData();
  }
}
