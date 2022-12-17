import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnalyticsService } from './analytics.service';
import { Analytics } from './entities/analytics.entity';
import { CreateAnalyticsInput } from './dto/create-analytics.input';
import { UpdateAnalyticsInput } from './dto/update-analytics.input';

@Resolver(() => Analytics)
export class AnalyticsResolver {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Mutation(() => Analytics)
  createAnalytics(@Args('createAnalyticsInput') createAnalyticsInput: CreateAnalyticsInput) {
    return this.analyticsService.create(createAnalyticsInput);
  }

  @Query(() => [Analytics], { name: 'analytics' })
  findAll() {
    return this.analyticsService.findAll();
  }

  @Query(() => Analytics, { name: 'analytics' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.analyticsService.findOne(id);
  }

  @Mutation(() => Analytics)
  updateAnalytics(@Args('updateAnalyticsInput') updateAnalyticsInput: UpdateAnalyticsInput) {
    return this.analyticsService.update(updateAnalyticsInput.id, updateAnalyticsInput);
  }

  @Mutation(() => Analytics)
  removeAnalytics(@Args('id', { type: () => Int }) id: number) {
    return this.analyticsService.remove(id);
  }
}
