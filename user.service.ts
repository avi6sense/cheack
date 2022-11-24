import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>, //private jwtService: JwtService,
  ) {}

  async createUser(
    fname: string,
    lname: string,
    email: string,
    password: string,
    address: string,
    userType: string,
  ) {
    //const salt = await bcrypt.genSalt();
    // const hashPassword = await bcrypt.hash(password, salt);
    //console.log(' salt', salt);
    // console.log(' hashPassword', hashPassword);
    const user = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      address: address,
      userType: userType,
    };
    const createdUser = await this.userModel.create(user);
    // createdUser.save();
    return createdUser;
  }
}
